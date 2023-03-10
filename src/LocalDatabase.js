import { v4 as uuidv4 } from 'uuid';

export default function LocalDatabase() {
	return [
		{
			name: 'Snap Back',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg',
			artist: 'EI Train, Marc Mathias',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=49429',
			color: ['#7E6B42', '#EFEDDF'],
			id: uuidv4(),
			active: true,
		},
		{
			name: 'Frisky Feeling',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=28955',
			artist: 'Marc Mathias',
			color: ['#FEF5E6', '#9BC0D6'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Tomorrow Never Knows',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/11/da399b456f7ef532e6801f36629fd28a0f761d2e-1024x1024.jpg',
			artist: 'Aso, Middle School',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=8034',
			color: ['#FB8189', '#F4F1EA'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Dog Days',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg',
			artist: 'L Indécis, sadtoi',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=8689',
			color: ['#3A496D', '#7BCBAF'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'grandiose soul',
			cover:
				'https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg',
			artist: 'Masked Man',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=8698',
			color: ['#B29457', '#EFF0EB'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'The Loveliest Dream',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/10/8b7ba4cdad98f47e0411cfe94c50cce4a68cb848-1024x1024.jpg',
			artist: 'Sofasound',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=45155',
			color: ['#373A66', '#E6BFD8'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Sleep Walker',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg',
			artist: 'J.Folk',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=43902',
			color: ['#71C2A3', '#EEE5B5'],
			id: uuidv4(),
			active: false,
		},
		{
			name: "It'll Last M",
			cover:
				'https://chillhop.com/wp-content/uploads/2023/01/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg',
			artist: 'Sleepy Fish, coa',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=36916',
			color: ['#980E0B', '#F9C457'],
			id: uuidv4(),
			active: false,
		},
	];
}
