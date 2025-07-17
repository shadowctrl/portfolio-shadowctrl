'use server';

export const handleAction = async (formData: any) => {
	const rawFormData = {
		name: formData.name,
		mail: formData.email,
		description: `Subject: ${formData.subject}\n\n${formData.message}`,
	};

	const res = await fetch(`${process.env.BASE_URL}/api/sendMail`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data: rawFormData }),
	});

	return res.status;
};
