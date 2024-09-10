import { FormEvent, useState } from "react";

export default function useFormSubmit() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm as HTMLFormElement);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>,).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  }

  const handleFormSubmitTest = (event: FormEvent) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm as HTMLFormElement);
    const formDataEntries = formData.entries();

    const myData = Object.fromEntries(formDataEntries);
    console.log(myData);
  }

  return { handleFormSubmit, handleFormSubmitTest, status, error };
}
