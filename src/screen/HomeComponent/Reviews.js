import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import profile1 from '../../images/home/profile1.jpg'
import profile2 from '../../images/home/profile2.jpg'
import profile3 from '../../images/home/profile3.jpg'

const OneReview = (props) => {
    const { title, details, image } = props;
    return (
        <div className="col s6 m4 l4">
            <div style={{ minHeight: 200 }}>
                <img src={image} alt='' style={{ height: 170, borderRadius: '100%' }} />
                <div className="card-content flow-text" style={{ textAlign: "left", fontSize: 16, paddingLeft: 16, paddingRight: 16 }}>
                    <p>{title}</p>
                    <StarRatingsOnBlog />
                    <br />
                    <p>{details}</p>

                </div>
            </div>
        </div>
    )
}

export const Reviews = () => {
    return (
        <div className='row center' style={{ width: '80%' }}>
            <h5 style={{ textAlign: "left" }}>Reviews from Happy Customers</h5>
            <div className='row' >
                <OneReview image={data[0].image} title={data[0].title} details={data[0].details} />
                <OneReview image={data[1].image} title={data[1].title} details={data[1].details} />
                <OneReview image={data[2].image} title={data[2].title} details={data[2].details} />
            </div>
        </div>
    )
}

const data = [
    {
        title: 'Caron Wrote on August 23',
        details: "So unique and absolutely fabulous design and quality. Couldn't be happier! Thank you!",
        image: profile1
    },
    {
        title: 'Annastatia wrote on August 15',
        details: 'A Cool-ass postcard. Love it',
        image: profile2
    },
    {
        title: 'Ryan wrote on August 10',
        details: "Irene was great adn broke up a set of 3 so I could order Exactly what i was looking for!",
        image: profile3
    }
]


 
class StarRatingsOnBlog extends Component {
    render() {
      // rating = 2;
      return (
        <StarRatings
            rating={5}
            isSelectable={false}
            starDimension="15px"
            starSpacing="3px"
            starRatedColor="rgb(4,30,65)"
            starHoverColor="rgb(4,30,65)"
            numberOfStars={5}
            name='rating'
        />
      );
    }
}