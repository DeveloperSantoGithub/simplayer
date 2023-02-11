export default function LibraryTracks({ song }) {
	return (
		<div className="track">
			<div className="tarckImage">
				<img src={song.cover} alt="cover" />
			</div>

			<div className="trackInfo">
				<h1>{song.name}</h1>
				<h2>{song.artist}</h2>
			</div>
		</div>
	);
}
