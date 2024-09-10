import type { Context } from "@netlify/functions";

const handleReq = async (req: Request, context: Context) => {
  const data = await req.json();
  console.log('data:', data);
  return new Response("Hello, world!")
}


const contextjson = export default handleReq;
