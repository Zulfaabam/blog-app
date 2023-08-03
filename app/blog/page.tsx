import React from "react";
import getData from "../utils/getData";

interface Posts {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export default async function Page() {
  const posts: Posts[] = await getData("posts");

  console.log(posts);

  return (
    <div>
      {posts?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
