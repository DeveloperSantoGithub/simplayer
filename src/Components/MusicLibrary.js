import LibraryTracks from './LibraryTracks';

export default function MusicLibrary({ songs, setCurrentSong }) {
	return (
		<div className="Library">
			<h2>Library</h2>
			<div className="libraryTracks">
				{songs.map((song) => (
					<LibraryTracks
						song={song}
						key={song.id}
						setCurrentSong={setCurrentSong}
					/>
				))}
			</div>
		</div>
	);
}
