export default function Player() {
	return (
		<div className="player">
			<div className="timeControl">
				<p>Start Time</p>
				<input type="range" />
				<p>End Time</p>
			</div>
			<div className="playControl">
				<button>Previous</button>
				<button>Play/Puse</button>
				<button>Next</button>
			</div>
		</div>
	);
}
