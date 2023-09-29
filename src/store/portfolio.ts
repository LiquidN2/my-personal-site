import { atom } from 'nanostores';

export interface Item {
  id: string;
  name: string;
  value: string;
  label: string;
  selected?: boolean;
}

interface Porfolio {
  filter: {};
}
