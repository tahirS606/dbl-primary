import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-thumbnail',
  templateUrl: './property-thumbnail.component.html',
  styleUrls: ['./property-thumbnail.component.css'],
})
export class PropertyThumbnailComponent {
  @Input() property: any = [];
}
