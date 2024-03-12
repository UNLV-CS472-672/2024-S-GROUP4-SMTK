export default function auth() {
  // will be navigated to this page after click chats button on homepage
  return <div></div>

}


// import { NextApiRequest, NextApiResponse } from 'next'
 
// export default async function handler(
//   req,
//   res
// ) {
//   try {
//     const { email, password } = req.body
 
//     res.status(200).json({ success: true })

//   } catch (error) {
//     if (error.type === 'CredentialsSignin') {
//       res.status(401).json({ error: 'Invalid credentials.' })
//     } else {
//       res.status(500).json({ error: 'Something went wrong.' })
//     }
//   }
// }
/*
import { NextResponse } from "next/server";
const handler = () =>
{
  return new NextResponse("hi")
} 
export { handler as GET, handler as POST }
*/