import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NotifierService } from 'notifier';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImageService {
  private _imageLoaded = new Subject<string>();

  constructor(private readonly _domSanitizer: DomSanitizer, private readonly _notifier: NotifierService) {}

  public handleImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        this._imageLoaded.next(reader.result.toString());
      }
    };

    reader.onerror = (error) => this._notifier.error(error);
  }

  public get imageChanges(): Subject<string> {
    return this._imageLoaded;
  }
}
