export default async function getChannels(channel) {
	const fetchJson = await fetch(
		`http://api.sr.se/api/v2/channels/${channel}?format=json`,
		{
			headers: {
				'content-type': 'application/json',
			},
		}
	);

	return await fetchJson.json();
}
