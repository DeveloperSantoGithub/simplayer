export default function LibraryTracks({
	songs,
	song,
	setCurrentSong,
	songsRef,
	isPlaying,
	setSongs,
	id,
}) {
	const handleTrackSelect = async () => {
		await setCurrentSong(song);

		//=> Checking Audio Play:
		if (!isPlaying) songsRef.current.play();

		//=> Change Active State:
		const activeSong = songs.map((newSong) => {
			if (newSong.id === id) {
				return { ...newSong, active: true };
			} else {
				return { ...newSong, active: false };
			}
		});

		setSongs(activeSong);
	};

	return (
		<div
			onClick={handleTrackSelect}
			className={`track  ${song.active ? 'selectedTrack' : null}`}
		>
			<p className="doubleClick">Click</p>
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
