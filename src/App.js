import { useState } from 'react';
import MusicInfo from './Components/MusicInfo';
import Navbar from './Components/Navbar';
import Player from './Components/Player';
import data from './LocalDatabase';
import './Styles/Global.scss';
function App() {
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(' ');

	return (
		<div className="App">
			<Navbar />
			<MusicInfo currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
		</div>
	);
}

export default App;
