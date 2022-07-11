import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImageService {

  public generatePhotoUrlById(id: string): string {
    return 'api/storage/storage/' + id
  }
}
