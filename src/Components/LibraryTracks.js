export default function LibraryTracks({ song }) {
	return (
		<div className="track">
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
