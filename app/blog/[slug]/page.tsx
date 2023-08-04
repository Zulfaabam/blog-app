import getData from "@/app/utils/getData";
import { Comments, Posts } from "@/app/utils/interfaces";

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Posts = await getData(`posts/${params.slug}`);

  const comments: Comments[] = await getData(`posts/${params.slug}/comments`);

  return (
    <div>
      <p>My Post: {params.slug}</p>
      <p>My Post: {post.user_id}</p>
      <p>My Post: {post.title}</p>
      <p>My Post: {post.body}</p>
      {comments?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
