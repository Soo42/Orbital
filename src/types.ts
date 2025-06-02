export interface Message {
  id: number;
  sender: "user" | "other user";
  content: string;
}
