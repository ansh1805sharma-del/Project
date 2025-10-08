
//import ChatForum from '@/components/ui/ChatForum';
//import { Chat, useCreateChatClient } from 'stream-chat-react';

import ChatForum from "@/components/ui/ChatForum"

// export default async function Page({ params }){
//     const slug = (await params).slug
//     return <>ChatForum</>
// }

export async function generateStaticParams() {
  return [
    { slug: 'general' },
    { slug: 'help' },
    { slug: 'feedback' },
  ];
}



// export default function TopicPage({ params }) {
//   const { slug } = params;

//   return (
//     <div className="min-h-screen p-10">
//       <h1 className="text-4xl font-bold mb-4">{slug.replace("-", " ")}</h1>
//       <p className="text-lg text-gray-600">
//         Welcome to the {slug.replace("-", " ")} Forums 🎉
//       </p>
//     </div>
//   );
// }

