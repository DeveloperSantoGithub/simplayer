export default function LibraryTracks({
	song,
	setCurrentSong,
	songsRef,
	isPlaying,
}) {
	const handleTrackSelect = async () => {
		await setCurrentSong(song);

		if (!isPlaying) {
			const playPromise = songsRef.current.play();

			if (playPromise !== undefined) {
				playPromise.then((audio) => {
					songsRef.current.play();
				});
			}
		}
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
