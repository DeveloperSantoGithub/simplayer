export default function MusicInfo({ currentSong }) {
	return (
		<div className="musicInfo">
			<img src={currentSong.cover} alt="cover" />
			<h1>{currentSong.name}</h1>
			<h2>{currentSong.artist}</h2>
		</div>
	);
}
