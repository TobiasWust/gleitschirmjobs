const handleReq = async (req: Request) => {
  const data = req.body;
  console.log('data:', data);
  return new Response("Hello, world!")
}

export default handleReq;
