import { useState, useEffect } from 'react';

import config from '../config/keys';
import youtube from '../api/youtube';

const useVideo = (defaultTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultTerm);
	}, [defaultTerm]);

	const search = async term => {
		const response = await youtube.get('/search', {
			params: { 
				q: term,
				part: "snippet",
				type: "video",
				maxResults: 10,
				key: config.googleApi
			 }
		});
		setVideos(response.data.items);
	}
	return [ videos, search ];
};

export default useVideo;