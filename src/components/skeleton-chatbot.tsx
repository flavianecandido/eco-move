import { Loader2 } from "lucide-react";

export function SkeletonChatbot() {
  return (
    <div className="flex items-center justify-center h-[600px] bg-white shadow-xl rounded-xl">
      <div className="text-center">
        <Loader2 className="animate-spin mx-auto mb-4" size={32} />
        <p>Conectando-se a Lumi...</p>
      </div>
    </div>
  );
}
