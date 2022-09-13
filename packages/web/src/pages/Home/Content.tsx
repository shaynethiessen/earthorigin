import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player/file';
import {environment} from '../../core/environment';
import {server} from '../../core/server';
import type {FilmFindReturn} from 'earthorigin-types';

export function Content() {
	const [count, setCount] = useState(0);
	const [playing, setPlaying] = useState(false);
	const [films, setFilms] = useState<FilmFindReturn>([]);

	useEffect(() => {
		const tags = ['waterfall'];

		server.fetch('Watch.Actions.Film.Find', {tags}).then(response => {
			setFilms(response.data);
		});
	}, []);

	useEffect(() => {
		if (!playing && films.length !== 0) {
			setPlaying(true);
		}
	}, [playing, films]);

	function nextVideo() {
		if (films.length - 1 === count) {
			setCount(0);
		} else {
			setCount(count + 1);
		}
		setPlaying(true);
	}

	if (films.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div style={{width: '100%', height: '100%', padding: 0, margin: 0}}>
			<ReactPlayer
				url={`${environment.serverURL}${films[count].path}`}
				playing={playing}
				onEnded={nextVideo}
				controls={true}
				width={'95%'}
				height={'100%'}
				style={{}}
			/>
		</div>
	);
}
