export interface Shareholder {
  holder: string;
  share_percent: string;
}

export interface NormalizedShareholder {
  key: number;
  holder: string;
  share_percent: number;
}
