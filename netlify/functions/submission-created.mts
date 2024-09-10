import { createClient } from "./server.mts";

const handleReq = async (req: Request) => {
  const data = await req.json();
  const formName = data.payload.form_name;

  if (formName !== "post") {
    return
  }

  const supabase = await createClient();

  if (formName === 'post') {
    const formData = data.payload.data;

    const { data: result, error } = await supabase
      .from('jobs')
      .insert([
        {
          categoryId: data.categoryId,
          company: formData.company,
          companyUrl: formData.companyUrl,
          description: formData.description,
          employmentType: [''],
          isActive: false,
          isVerified: false,
          jobUrl: formData.jobUrl,
          listingType: formData.listingType,
          location: formData.location,
          title: formData.title,
        },
      ])
      .select()
    console.log(`Form name: ${formName}`);
    console.log(`Form data: ${JSON.stringify(formData)}`);
    console.log(`Result: ${result}`);
    console.log(`Error: ${error}`);

  }
  return
}


export default handleReq;
