import { watsonApi } from "@/services/ibm-watson";
import React from "react";
import { WatsonMsgResponse, WatsonSessionResponse } from "./types";

export function useAssistanceChatbot() {
  const createSession = React.useCallback(async () => {
    const response = await watsonApi.get<WatsonSessionResponse>(
      "/watson/session"
    );

    return response.data;
  }, []);

  const sendMessage = React.useCallback(
    async (sessionId: string, message: string) => {
      const response = await watsonApi.post<WatsonMsgResponse[]>(
        "/watson/message",
        {
          sessionId,
          message,
        }
      );

      return response.data;
    },
    []
  );

  return { createSession, sendMessage };
}
