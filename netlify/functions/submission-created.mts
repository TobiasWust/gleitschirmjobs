import type { Context } from "@netlify/functions";

const handleReq = async (req: Request, context: Context) => {
  const data = req.body;
  console.log('context:', context);
  console.log('data:', data);
  return new Response("Hello, world!")
}

export default handleReq;
