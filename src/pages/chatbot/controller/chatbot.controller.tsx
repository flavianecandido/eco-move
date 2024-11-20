import React from "react";
import { Message } from "../types";
import { Chatbot } from "../view/chatbot.view";
import { useAssistanceChatbot } from "@/hook/use-assistance-chatbot";

export function ChatbotController() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputMessage, setInputMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [sessionId, setSessionId] = React.useState<string | null>(null);
  const messageEndRef = React.useRef<HTMLDivElement>(null);

  const assistance = useAssistanceChatbot();

  const createSession = React.useCallback(async () => {
    try {
      const { session_id } = await assistance.createSession();
      setSessionId(session_id);
    } catch (error) {
      console.error("Failed to create session:", error);
    }
  }, [assistance, setSessionId]);

  React.useEffect(() => {
    createSession();
  }, []);

  const scrollToBottom = React.useCallback(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const sendMessage = React.useCallback(async () => {
    if (!inputMessage.trim() || !sessionId) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await assistance.sendMessage(sessionId, inputMessage);

      const watsonResponse: Message = {
        id: Date.now(),
        text: response[0].text,
        sender: "watson",
      };

      setMessages((prev) => [...prev, watsonResponse]);
    } catch (error) {
      console.error("Message send error:", error);
      const errorMessage: Message = {
        id: Date.now(),
        text: "Sorry, there was an error processing your message.",
        sender: "watson",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  }, [inputMessage, sessionId, assistance, scrollToBottom]);

  const handleKeyPress = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !isLoading) {
        sendMessage();
      }
    },
    [sendMessage, isLoading]
  );

  return (
    <Chatbot
      messages={messages}
      isLoading={isLoading}
      hasSessionId={!!sessionId}
      handleKeyPress={handleKeyPress}
      inputMessage={inputMessage}
      messageEndRef={messageEndRef}
      sendMessage={sendMessage}
      setInputMessage={setInputMessage}
    />
  );
}
