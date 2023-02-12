export default function Player({
	currentSong,
	isPlaying,
	setIsPlaying,
	songInfo,
	songsRef,
	setSongInfo,
	songs,
	setCurrentSong,
}) {
	//=> All Events Handler:
	const timeFormater = (time) => {
		return (
			Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
		);
	};

	const handlePlaySongs = () => {
		if (!isPlaying) {
			songsRef.current.pause();
			setIsPlaying(true);
		} else {
			songsRef.current.play();
			setIsPlaying(false);
		}
	};

	const dragHandler = (e) => {
		songsRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const handleSkipButton = (direction) => {
		const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

		if (direction === 'skipNext') {
			setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		}

		if (direction === 'skipBack') {
			if ((currentIndex - 1) % songs.length === -1) {
				setCurrentSong(songs[songs.length - 1]);
				return; // if we do not provide return here. Then the bellow code will be execute and gives us an error.
			}
			setCurrentSong(songs[(currentIndex - 1) % songs.length]);
		}
	};

	return (
		<div className="musicPlayer">
			<div className="timeControl">
				<p>{timeFormater(songInfo.currentTime)}</p>
				<input
					type="range"
					min="0"
					max={songInfo.duration || 0}
					value={songInfo.currentTime}
					onChange={dragHandler}
				/>
				<p>{timeFormater(songInfo.duration || 0)}</p>
			</div>
			<div className="playControl">
				<span
					onClick={() => handleSkipButton('skipBack')}
					className="material-icons-outlined"
				>
					navigate_before
				</span>

				{!isPlaying ? (
					<span className="material-icons-outlined" onClick={handlePlaySongs}>
						pause_circle
					</span>
				) : (
					<span className="material-icons-outlined" onClick={handlePlaySongs}>
						play_circle
					</span>
				)}

				<span
					onClick={() => handleSkipButton('skipNext')}
					className="material-icons-outlined"
				>
					navigate_next
				</span>
			</div>
		</div>
	);
}
