export default function LibraryTracks({ song }) {
	return (
		<div className="track">
			<div className="tarckImage">
				<img src={song.cover} alt="cover" />
			</div>

			<div className="trackInfo">
				<h2>{song.name}</h2>
				<h3>{song.artist}</h3>
			</div>
		</div>
	);
}
