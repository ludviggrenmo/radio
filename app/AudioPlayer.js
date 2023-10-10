'use client';

import { useEffect, useState } from 'react';

export default function AudioPlayer({ url }) {
	if (url.length === 0) {
		return null;
	}

	return (
		<audio autoPlay controls>
			<source src={url} type="audio/mpeg" />
		</audio>
	);
}
