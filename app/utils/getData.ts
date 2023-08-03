export default async function getData(data: string) {
  if (!data) return;

  const res = await fetch(`https://gorest.co.in/public/v2/${data}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
