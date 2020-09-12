import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import useVideos from '../hooks/useVideos';
import BgYtPlayer from './BgYtPlayer';
import Coverflow from './Coverflow';

import './App.scss';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('popular');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="page">
			<div className="ui container" style={{ marginTop: '10px'}}>
					<BgYtPlayer video={selectedVideo} />
					<div>
						<div style={{marginTop: '15%'}}>
							<SearchBar onSubmit={search}/>	
						</div>
						<Coverflow slides={videos} onVideoSelect={setSelectedVideo}/>
					</div>
			</div>
		</div>
	);

}

export default App;
