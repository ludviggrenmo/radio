import Link from 'next/link';
import getChannels from './getChannels';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
	const response = await getChannels();

	const { channels } = response;
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="p-4 grid place-content-center gap-6 min-h-screen">
					<ul className="grid grid-cols-5 gap-4">
						{channels.map((channel) => {
							return (
								<li className="cursor-pointer" key={channel.id}>
									<Link href={`/channels/${channel.id}`}>
										<img
											src={channel.image}
											width={100}
											height={100}
											alt={channel.name}
										></img>
									</Link>
								</li>
							);
						})}
					</ul>
					{children}
				</div>
			</body>
		</html>
	);
}
