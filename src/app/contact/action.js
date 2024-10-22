export const handleAction = async (formData) => {
  const rawFormData = {
    name: formData.get("name"),
    mail: formData.get("mail"),
    description: formData.get("description"),
  };

  const res = await fetch("https://shadowctrl.me/api/sendMail", {
    method: "POST",
    body: JSON.stringify({ data: rawFormData }),
  });

  return res.status;
};
