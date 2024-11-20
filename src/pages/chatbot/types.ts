export interface Message {
  id: number;
  text: string;
  sender: "user" | "watson";
}

export interface IChatbot {
  messages: Message[];
  isLoading: boolean;
  messageEndRef: React.LegacyRef<HTMLDivElement> | null;
  inputMessage: string;
  setInputMessage(msg: string): void;
  handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void;
  sendMessage(): void;
  hasSessionId: boolean;
}
