import { Loader2, MessageCircle, Send } from "lucide-react";
import { IChatbot } from "../types";
import { SkeletonChatbot } from "@/components/skeleton-chatbot";

export function Chatbot({
  messages,
  handleKeyPress,
  inputMessage,
  isLoading,
  messageEndRef,
  setInputMessage,
  sendMessage,
  hasSessionId,
}: Readonly<IChatbot>) {
  if (!hasSessionId) return <SkeletonChatbot />;

  return (
    <div className="flex flex-col max-w-md mx-auto h-[600px] bg-white shadow-xl rounded-xl overflow-hidden">
      <div className="bg-blue-600 text-white p-4 flex items-center">
        <MessageCircle className="mr-2" />
        <h2 className="text-xl font-bold">Lumi</h2>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-3">
        {messages.map(({ id, sender, text }) => (
          <div
            key={id}
            className={`flex ${
              sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 px-4 py-2 rounded-2xl flex items-center">
              <Loader2 className="mr-2 animate-spin" size={20} />
              Lumi escrevendo...
            </div>
          </div>
        )}
        <div ref={messageEndRef} />
      </div>

      <div className="p-4 bg-gray-100 flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escreva sua duvida..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !inputMessage.trim()}
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
        </button>
      </div>
    </div>
  );
}
