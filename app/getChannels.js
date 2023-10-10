export default async function getChannels() {
	const fetchJson = await fetch(
		'http://api.sr.se/api/v2/channels?format=json',
		{
			headers: {
				'content-type': 'application/json',
			},
		}
	);

	return await fetchJson.json();
}
