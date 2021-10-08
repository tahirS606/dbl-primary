import { Observable ,  Subscriber } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

// globals
private _currentFile! : File ;
private _currentImage : 

ICompressedImage = {} ;

// Constructor
constructor( private sanitizer : DomSanitizer , private _zone : NgZone) {

}

// FileReader Onload callback
readerOnload(observer : Subscriber<ICompressedImage>)  {
 return (progressEvent : ProgressEvent) => {
  const img = new Image();
  img.src = (progressEvent.target as any).result;
  img.onload = this.imageOnload(img , observer);
}
}

// drawImageActualSize() {
//   // Use the intrinsic size of image in CSS pixels for the canvas element
//   canvas.width = this.naturalWidth;
//   canvas.height = this.naturalHeight;

//   // Will draw the image as 300x227, ignoring the custom size of 60x45
//   // given in the constructor
//   ctx.drawImage(this, 0, 0);

//   // To use the custom size we'll have to specify the scale parameters
//   // using the element's width and height properties - lets draw one
//   // on top in the corner:
//   ctx.drawImage(this, 0, 0, this.width, this.height);
// }

// Image Onload callback
 imageOnload(image : HTMLImageElement , observer : Subscriber<ICompressedImage>) {
  return () => {
  const canvas = document.createElement('canvas');

  if (image.naturalWidth > image.naturalHeight){
    canvas.width = 150; 

  }else {
    canvas.height = 150
  }
  canvas.width = image.naturalWidth
  canvas.height = image.naturalHeight
  const context = <CanvasRenderingContext2D>canvas.getContext('2d');
  context.drawImage(image, 0, 0, canvas.width /2, canvas.height /2);
  this.toICompressedImage(context , observer);
}}

// Emit CompressedImage
toICompressedImage(context : CanvasRenderingContext2D , observer : Subscriber<ICompressedImage> ) {
  context.canvas.toBlob(
    (blob: any) => {
      this._currentImage.blob = blob ;
      this._currentImage.image = new File([blob] , this._currentFile.name , {type : 'image/jpeg', lastModified : Date.now()} );
      this._currentImage.imgUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
      this._currentImage.name = this._currentFile.name ;
      this._zone.run(() => {
        observer.next(this._currentImage);
        observer.complete();
      })

    } ,
    'image/jpeg' ,
    1
  );
};

compress(file : File): Observable<ICompressedImage> {
   this._currentFile = file ;
   return new Observable<ICompressedImage>(
     observer => {
       this._zone.runOutsideAngular(() => {
        const currentFile = file;

        const reader = new FileReader();
        reader.readAsDataURL(currentFile);
        reader.onload = this.readerOnload(observer);
       })

     }
   );
 }
}

// Image Data Interface
export interface ICompressedImage {
  name? : string;
  image? : File ;
  blob? : Blob ;
  imgUrl? : SafeUrl ;
}


