const handleReq = async (req: Request) => {
  const data = await req.json();
  console.log('data:', data);
  return new Response("Hello, world!")
}


export default handleReq;
