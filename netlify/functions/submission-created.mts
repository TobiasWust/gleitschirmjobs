import type { Context } from "@netlify/functions";

const handleReq = async (req: Request, context: Context) => {
  console.log({ context });
  console.log('context.json:', context.json);
  console.log({ req });
  return new Response("Hello, world!")
}

export default handleReq;
