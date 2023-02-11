export default function Player({
	currentSong,
	isPlaying,
	setIsPlaying,
	songInfo,
	songsRef,
	setSongInfo,
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

	return (
		<div className="musicPlayer">
			<div className="timeControl">
				<p>{timeFormater(songInfo.currentTime)}</p>
				<input
					type="range"
					min="0"
					max={songInfo.duration}
					value={songInfo.currentTime}
					onChange={dragHandler}
				/>
				<p>{timeFormater(songInfo.duration)}</p>
			</div>
			<div className="playControl">
				<span className="material-icons-outlined">navigate_before</span>

				{!isPlaying ? (
					<span className="material-icons-outlined" onClick={handlePlaySongs}>
						pause_circle
					</span>
				) : (
					<span className="material-icons-outlined" onClick={handlePlaySongs}>
						play_circle
					</span>
				)}

				<span className="material-icons-outlined">navigate_next</span>
			</div>
		</div>
	);
}
