import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class ImageService {
  public generatePhotoUrlById(id: string): string {
    return `${environment.storageApiUrl}/storage/${id}`;
  }

  public generateUserPhotoUrl(photoId?: string): string {
    return `${environment.storageApiUrl}/storage/${photoId || environment.defaultUserPhotoId}`;
  }
}
