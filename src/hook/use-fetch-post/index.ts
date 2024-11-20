import React from "react";
import { PostResponse } from "./types";

export function useFetchPost() {
  const [posts, setPosts] = React.useState<PostResponse[]>([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  React.useEffect(() => {
    fetchApi();
  }, []);

  return { posts };
}
