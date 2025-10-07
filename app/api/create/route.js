import { auth } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";
import { NextResponse } from 'next/server'; // Import NextResponse for proper API responses


export const dynamic = "force-static";
export async function GET() {
    const { userId } = await auth(); // Get the user's ID using the correct server-side auth function

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const token = serverClient.createToken(userId); // Use the Clerk user ID to create the Stream token

    console.log(token);
    return NextResponse.json({ token }); // Respond with the token
}
