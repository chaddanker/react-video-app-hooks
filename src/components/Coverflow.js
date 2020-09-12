import React, { Component, createRef } from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";
import "./Coverflow.scss";

class Coverflow extends Component {

    constructor(props) {
        super(props);
        this.swiperRef = createRef();
    }
    _onClick = (i) => {
        this.props.onVideoSelect(this.props.slides[i]);
        this.swiperRef.current.swiper.realIndex = i;
    }
    
	renderList() {
		return this.props.slides.map((video, i) => {
            const selectedIndex = this.swiperRef.current ? this.swiperRef.current.swiper.realIndex : 0;

			return (
                <div 
                    id={`swiper-slide-${i}`} 
                    key={i} 
                    style={{ 
                        height: 200, 
                        width: 200 
                    }}
                >
                    <img 
                        style={selectedIndex === i ? 
                            { border: '7px solid #fafafa' } : 
                            {boxShadow: '5px 5px 20px'}} 
                        className="ui image" 
                        src={video.snippet.thumbnails.medium.url} 
                        alt={video.snippet.title} 
                        onClick={_ => this._onClick(i)}
                    />
				</div>
			);
		});
	}

	render() {
        const params = {
            spaceBetween: 30,
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: window.innerWidth < 400 ? 2 : 7,
			keyboard: true
	    }
		return (
			<Swiper ref={this.swiperRef} {...params} shouldSwiperUpdate >
				{this.renderList()}
			</Swiper>	
		);
	}
}


export default Coverflow;
