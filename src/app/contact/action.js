export const handleAction = async (formData) => {
  const rawFormData = {
    name: formData.get("name"),
    mail: formData.get("mail"),
    description: formData.get("description"),
  };

  const res = await fetch("http://localhost:3000/api/sendMail", {
    method: "POST",
    body: JSON.stringify({ data: rawFormData }),
    cache: "no-store",
  });

  return res.status;
};
