import type { Context } from "@netlify/functions";

const handleReq = async (req: Request, context: Context) => {
  console.log(context);
  return new Response("Hello, world!")
}

export default handleReq;
