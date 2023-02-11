import LibraryTracks from './LibraryTracks';

export default function MusicLibrary({
	songs,
	setCurrentSong,
	songsRef,
	isPlaying,
}) {
	return (
		<div className="Library">
			<h2>Library</h2>
			<div className="libraryTracks">
				{songs.map((song) => (
					<LibraryTracks
						song={song}
						key={song.id}
						setCurrentSong={setCurrentSong}
						songsRef={songsRef}
						isPlaying={isPlaying}
					/>
				))}
			</div>
		</div>
	);
}
