import LibraryTracks from './LibraryTracks';

export default function MusicLibrary({ songs }) {
	return (
		<div className="Library">
			<h2>Library</h2>
			<div className="libraryTracks">
				{songs.map((song) => (
					<LibraryTracks song={song} />
				))}
			</div>
		</div>
	);
}
