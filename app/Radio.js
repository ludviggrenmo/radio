'use client';

import { useState } from 'react';
import AudioPlayer from './AudioPlayer';

export default function Radio({ channels }) {
	const [url, setUrl] = useState('');

	return (
		<div className="p-4 grid place-content-center gap-6 min-h-screen">
			<ul className="grid grid-cols-5 gap-4">
				{channels.map((channel) => {
					return (
						<li
							className="cursor-pointer"
							onClick={() => {
								console.log(JSON.stringify(channel.liveaudio.url, null, 2));
								setUrl(channel.liveaudio.url);
							}}
							key={channel.id}
						>
							<img
								src={channel.image}
								width={100}
								height={100}
								alt={channel.name}
							></img>
						</li>
					);
				})}
			</ul>
			<div className="mx-auto">
				<AudioPlayer url={url} />
			</div>
		</div>
	);
}
