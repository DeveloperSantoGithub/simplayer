export default function Navbar({ libraryStatus, setLibraryStatus }) {
	return (
		<div className="navbar">
			<h1 className="logo">
				S<span className="material-icons-outlined">audiotrack</span>mplayer
			</h1>
			<span
				onClick={() => {
					setLibraryStatus(!libraryStatus);
				}}
				className="material-icons-outlined library-icon"
			>
				library_music
			</span>
		</div>
	);
}
