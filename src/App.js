import { useState } from 'react';
import MainPlayer from './Components/MainPlayer';
import Navbar from './Components/Navbar';
import './Styles/Global.scss';

function App() {
	const [libraryStatus, setLibraryStatus] = useState(false);
	return (
		<div className="App">
			<Navbar
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
			/>
			<MainPlayer libraryStatus={libraryStatus} />
		</div>
	);
}

export default App;
