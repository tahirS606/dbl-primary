import { Image } from './../models/image.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const BACKEND_URL= environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http : HttpClient,
  ) { }

  getImagesById(id: string) {
    return this.http.get<{image : Image}>(
      BACKEND_URL + 'images/' + id
    )
  }

}
