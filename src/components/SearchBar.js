import React, { useState } from 'react';

import './SearchBar.scss';

const SearchBar = ({onSubmit}) => {
	const [term, setTerm] = useState('');

	const onFormSubmit = event => {
		event.preventDefault(); 
		onSubmit(term);
	}

	const _onChange = (event) => {
		setTerm(event.target.value);
	}
	
	return(	
		<div className="search-bar-container">
			<div 
				className="ui segment search-container" 
				style={{ backgroundColor: 'rgba(0,0,0,0)', color: '#fafafa'}}
			>
				<form 
					onSubmit={onFormSubmit} 
					className="ui form" 
					style={{ backgroundColor: 'rgba(0,0,0,0)'}}
				>
					<div className="field">
						<input 
							placeholder="Search" 
							className="search-bar" 
							type="text" 
							onChange={event => _onChange(event)} 
							value={term} 
							style={{ backgroundColor: 'rgba(0,0,0,0.2)'}}/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;