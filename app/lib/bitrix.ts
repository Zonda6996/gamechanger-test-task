export async function createBitrixContact(name: string, email: string) {
	const webhook = process.env.BITRIX_WEBHOOK
	const url = `${webhook}/crm.contact.add.json`

	const res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			fields: {
				NAME: name,
				EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
			},
		}),
	})

	return res.json()
}
