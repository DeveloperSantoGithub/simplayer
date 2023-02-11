export default function LibraryTracks({ song, setCurrentSong }) {
	const handleTrackSelect = async () => {
		await setCurrentSong(song);
	};

	return (
		<div onDoubleClick={handleTrackSelect} className="track">
			<div className="tarckImage">
				<img src={song.cover} alt="cover" />
			</div>

			<div className="trackInfo">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
}
