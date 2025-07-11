export interface IChat {
  id: string;
  userId: string;
  score: number;
  location: string | null;
  time_stamp: Date;
}

export interface IChatItem {
  role: string;
  parts: { text: string }[];
}
