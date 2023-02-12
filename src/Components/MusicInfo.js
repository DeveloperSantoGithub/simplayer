export default function MusicInfo({ currentSong }) {
	return (
		<div
			style={{
				background: `linear-gradient( to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
			}}
			className="musicInfo"
		>
			<img src={currentSong.cover} alt="cover" />
			<h1>{currentSong.name}</h1>
			<h2>{currentSong.artist}</h2>
		</div>
	);
}
