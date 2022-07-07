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
}
