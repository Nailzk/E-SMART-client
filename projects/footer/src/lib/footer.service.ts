import { Injectable } from '@angular/core';
import { faEnvelope, faIceCream, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IFooterInfoItem, ISocialInfo } from './interface';
import { faYoutube, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  public get infoItems(): IFooterInfoItem[] {
    return [
      { name: 'Phone', text: '+33 234-231-1111', icon: faPhone },
      { name: 'Address', text: '81600 Montand, France', icon: faLocationArrow },
      { name: 'Mail', text: 'clayshop@gmail.com', icon: faEnvelope },
    ];
  }

  public get socialItems(): ISocialInfo[] {
    return [
      { icon: faYoutube, link: '' },
      { icon: faTwitter, link: '' },
      { icon: faPinterest, link: '' },
      { icon: faInstagram, link: '' },
    ];
  }
}
