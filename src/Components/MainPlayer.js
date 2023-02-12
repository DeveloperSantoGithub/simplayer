import { useRef, useState } from 'react';
import MusicInfo from '../Components/MusicInfo';
import MusicLibrary from '../Components/MusicLibrary';
import Player from '../Components/Player';
import data from '../LocalDatabase';

export default function MainPlayer({ libraryStatus }) {
	const songsRef = useRef();

	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(' ');

	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});

	//=> Events Handlers:
	//-->> Track Auto Play Handler:
	// const trackAutoPlayHandler = async () => {
	// 	const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

	// 	await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

	// 	//-->> Play Audio:

	// 	const playPromise = songsRef.current.play();

	// 	if (playPromise !== undefined) {
	// 		playPromise
	// 			.then((audio) => {
	// 				songsRef.current.play();
	// 				console.log(songsRef.current.play());
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	}

	// 	// if (!isPlaying) songsRef.current.play();
	// };

	//-->> Track Time Updater:
	const handleUpdateTime = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;

		//=> Rounded Value:
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);

		//=> Percentage:
		const percentage = Math.round((roundedCurrent / roundedDuration) * 100);

		setSongInfo({
			...songInfo,
			currentTime: e.target.currentTime,
			duration: e.target.duration,
			animationPercentage: percentage,
		});
	};

	return (
		<>
			<MusicLibrary
				songs={songs}
				setCurrentSong={setCurrentSong}
				songsRef={songsRef}
				setSongs={setSongs}
				isPlaying={isPlaying}
				libraryStatus={libraryStatus}
			/>
			<MusicInfo currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				songsRef={songsRef}
				songs={songs}
				setSongs={setSongs}
				setSongInfo={setSongInfo}
				songInfo={songInfo}
				setCurrentSong={setCurrentSong}
			/>
			<audio
				onTimeUpdate={handleUpdateTime}
				onLoadedMetadata={handleUpdateTime}
				src={currentSong.audio}
				ref={songsRef}
			/>
		</>
	);
}
