export function PlayAudio(isPlaying, songsRef) {
	//=> Checking Audio Play:
	if (!isPlaying) {
		const playPromise = songsRef.current.play();

		if (playPromise !== undefined) {
			playPromise.then((audio) => {
				songsRef.current.play();
			});
		}
	}
}
