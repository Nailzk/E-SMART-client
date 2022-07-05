import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '@app/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  images: string[] = [];

  constructor(private readonly _imageService: ImageService, private readonly _domSanitizer: DomSanitizer) {
    this._imageService.imageChanges.subscribe((res) => {
      this.images.push(res);
      console.log(res);
      
    });
  }

  handleChanges(event: any): void {
    this._imageService.handleImageUpload(event);
  }
}
