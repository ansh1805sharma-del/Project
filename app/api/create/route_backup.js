import { Token } from "@clerk/nextjs/dist/types/server";

import { StreamChat } from "stream-chat";

const api_key ="99ue9bx5k6rp";
const api_secret ="ycp7sv2dgp7nekpdx2pn63km3kxhfj7bqzmc7f78kc36kf8yxfqq3m9n5uqeudgn";
const user_id ="user_32OK63hCOBsvB3MzrYQsZrvOIjR";

export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);

const token = serverClient.createToken(user_id);
console.log(token)
  return Response.json({ message: 'Hello World' })
}
