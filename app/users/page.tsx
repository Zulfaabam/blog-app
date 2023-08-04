import React from "react";
import getData from "../utils/getData";
import { Users } from "../utils/interfaces";

export default async function Page() {
  const users: Users[] = await getData("users");

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.gender}</p>
          <p>{user.status}</p>
        </div>
      ))}
    </div>
  );
}
