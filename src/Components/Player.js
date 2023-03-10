import { useEffect } from 'react';

export default function Player({
	currentSong,
	isPlaying,
	setIsPlaying,
	songInfo,
	songsRef,
	setSongInfo,
	songs,
	setSongs,
	setCurrentSong,
}) {
	//=> useEffects:
	useEffect(() => {
		//=> Change Active State:
		const activeSong = songs.map((newSong) => {
			if (newSong.id === currentSong.id) {
				return { ...newSong, active: true };
			} else {
				return { ...newSong, active: false };
			}
		});

		setSongs(activeSong);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSong]);

	//=> All Events Handler:

	//-->> Time Formater:
	const timeFormater = (time) => {
		return (
			Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
		);
	};

	//-->> Pause and Play Button:
	const handlePlaySongs = () => {
		if (!isPlaying) {
			songsRef.current.pause();
			setIsPlaying(true);
		} else {
			songsRef.current.play();
			setIsPlaying(false);
		}
	};

	//-->> Input Drager:
	const dragHandler = (e) => {
		songsRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	//-->> Next and Back Button:
	const handleSkipButton = async (direction) => {
		const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

		if (direction === 'skipNext') {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		}

		if (direction === 'skipBack') {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				if (!isPlaying) songsRef.current.play();
				return; // if we do not provide return here. Then the bellow code will be execute and gives us an error.
			}
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
		}
		//-->> Play Audio:
		if (!isPlaying) songsRef.current.play();
	};

	//=> Animate Track:
	const trackAnimation = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	};

	return (
		<div
			style={{
				background: `linear-gradient( to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
			}}
			className="musicPlayer"
		>
			<div className="timeControl">
				<p>{timeFormater(songInfo.currentTime)}</p>

				<div
					style={{
						background: `linear-gradient( to right, ${currentSong.color[1]}, ${currentSong.color[0]})`,
					}}
					className="inputField"
				>
					<input
						type="range"
						min="0"
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						onChange={dragHandler}
					/>
					<div style={trackAnimation} className="animated-inputField"></div>
				</div>
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
