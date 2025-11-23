export interface GameHistoryItem {
  period: string;
  number: number;
  bigSmall: 'Big' | 'Small';
  color: 'Green' | 'Red' | 'Violet';
}

export enum Tab {
  HOME = 'home',
  ACTIVITY = 'activity',
  PROMOTION = 'promotion',
  WALLET = 'wallet',
  ACCOUNT = 'account'
}

export interface User {
  uid: string;
  balance: number;
  username: string;
  vipLevel: number;
}