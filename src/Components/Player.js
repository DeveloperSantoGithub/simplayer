import { useRef } from 'react';

export default function Player({ currentSong }) {
	const songsRef = useRef();

	const handlePlaySongs = () => {
		songsRef.current.play();
	};

	return (
		<div className="musicPlayer">
			<div className="timeControl">
				<p>Start Time</p>
				<input type="range" />
				<p>End Time</p>
			</div>
			<div className="playControl">
				<span className="material-icons-outlined">navigate_before</span>

				<span className="material-icons-outlined" onClick={handlePlaySongs}>
					play_circle
				</span>
				{/* <span className="material-icons-outlined"> pause_circle</span> */}

				<span className="material-icons-outlined">navigate_next</span>
			</div>

			<audio src={currentSong.audio} ref={songsRef} />
		</div>
	);
}
