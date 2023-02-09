import MusicInfo from './Components/MusicInfo';
import Navbar from './Components/Navbar';
import Player from './Components/Player';
import './Styles/Global.scss';

function App() {
	return (
		<div className="App">
			<Navbar />
			<MusicInfo />
			<Player />
		</div>
	);
}

export default App;
