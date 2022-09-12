import React, {useState} from 'react';
import ReactPlayer from 'react-player/file';

export function Content() {
	const [count, setCount] = useState(0);
	const [playing, setPlaying] = useState(true);
	const videos = [
		'http://localhost:3001/2022/09/12/1.mp4',
		'http://localhost:3001/2022/09/12/2.mp4',
		'http://localhost:3001/2022/09/12/3.mp4',
		'http://localhost:3001/2022/09/12/4.mp4',
	];

	function nextVideo() {
		if (videos.length - 1 == count) {
			setCount(0);
		} else {
			setCount(count + 1);
		}
		setPlaying(true);
	}

	return (
		<div style={{width: '100%', height: '100%', padding: 0, margin: 0}}>
			<ReactPlayer url={videos[count]} playing={playing} onEnded={nextVideo} controls={true} width={'95%'} height={'100%'} style={{}} />
		</div>
	);
}
