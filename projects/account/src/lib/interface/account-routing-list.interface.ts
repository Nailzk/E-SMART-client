import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IAccountRoutingMenu {
  icon: IconDefinition;
  name: string;
  link: string;
  action?: () => void; 
}
