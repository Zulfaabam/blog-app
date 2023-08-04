import React from "react";
import getData from "../utils/getData";
import Link from "next/link";
import { Posts } from "../utils/interfaces";

export default async function Page() {
  const posts: Posts[] = await getData("posts");

  return (
    <div>
      {posts?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <Link href={`/blog/${item.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
