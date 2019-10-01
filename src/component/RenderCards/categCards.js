import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.css';



export class Article extends Component {
   render() {
	   var {image} = this.props.data,
			   {title} = this.props.data,
				{subtitle} = this.props.data,
				{price} = this.props.data;

	   return (
				<figure className={window.location.pathname !== "/" ? 'snip1584 card' : "snip1584"} 
				style={window.location.pathname !== "/" ? {marginLeft: window.innerWidth > 700 ? '3%': '10%'} : {}}>
					<img alt ='' src={image} />
					<figcaption>
					<span className='productName' >{title}</span>
						<p>{price}</p>
						<h6>{subtitle}</h6>
					</figcaption>
					{/* <a href="#"></a> */}
				</figure>
	   )
   }
};

export class CategorySlider extends Component{
   render() {
	// const lg = window.innerWidth > 1200;
	const md = window.innerWidth > 600 && window.innerWidth < 1200;
	const sm = window.innerWidth > 100 && window.innerWidth < 600;
	   var data = this.props.data;
	   var newsTemplate;
	   var settings = {
	   	dots: false,
		infinite: true,
		slidesToShow: sm ? 1 : md ? 1.9999 : 2.99999,
		slidesToScroll: 1,
   }
	   if (data.length > 0) {
		   newsTemplate = data.map(function(item, index) {
			   return (
					   <div key={index}  >
						   <Article data={item} />
					   </div>
			   )
		   })
	   } else {
		  return null
	   }
	   return (
		<div className='news'>
		   <div className='section center'>
		   <h1>Style <span className='pink'>Feed</span></h1>
		   <p>Outfit ideas, editor picks, styling inspiration and Face + Body tips</p>
		   <hr /><br />
		   </div>
			   <Slider {...settings}>{newsTemplate}</Slider>
			   <button className='btn btn-large pink-bg' style={{
					background: 'transparent', border: '1px solid #f0458cee', color: 'white'
				}} >VIEW MORE</button>
	</div>
	   );
   }
};
