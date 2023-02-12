import LibraryTracks from './LibraryTracks';

export default function MusicLibrary({
	songs,
	setCurrentSong,
	songsRef,
	isPlaying,
	setSongs,
	libraryStatus,
}) {
	return (
		<div
			className={`Library  ${libraryStatus === true ? 'activeLibrary' : ''} `}
		>
			<h2>Library</h2>
			<div className="libraryTracks">
				{songs.map((song) => (
					<LibraryTracks
						songs={songs}
						song={song}
						key={song.id}
						id={song.id}
						setCurrentSong={setCurrentSong}
						songsRef={songsRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</div>
		</div>
	);
}
