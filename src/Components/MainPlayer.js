import { useState } from 'react';
import MusicInfo from '../Components/MusicInfo';
import MusicLibrary from '../Components/MusicLibrary';
import Player from '../Components/Player';
import data from '../LocalDatabase';

export default function MainPlayer() {
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(' ');

	return (
		<>
			<MusicLibrary songs={songs} setCurrentSong={setCurrentSong} />
			<MusicInfo currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
		</>
	);
}
