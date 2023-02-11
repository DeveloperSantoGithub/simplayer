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
	});

	//=> Events Handlers:
	const handleUpdateTime = (e) => {
		setSongInfo({
			...songInfo,
			currentTime: e.target.currentTime,
			duration: e.target.duration,
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
				setSongs={setSongs}
				setSongInfo={setSongInfo}
				songInfo={songInfo}
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
