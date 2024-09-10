const handleReq = async (req: Request) => {
  const data = await req.json();
  const formName = data.payload.form_name;
  const formData = data.payload.data;
  console.log(`Form name: ${formName}`);
  console.log(`Form data: ${JSON.stringify(formData)}`);
  return new Response("Hello, world!")
}


export default handleReq;
