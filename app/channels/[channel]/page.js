import getChannels from '../getChannel';

export default async function RadioChannel({ params: { channel } }) {
	const response = await getChannels(channel);

	const {
		liveaudio: { url },
	} = response.channel;

	return (
		<audio autoPlay controls>
			<source src={url} type="audio/mpeg" />
		</audio>
	);
}
