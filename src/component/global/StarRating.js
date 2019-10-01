import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
 
export class StarRatingsOnProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0
        }
    }
    changeRating( newRating ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
            rating={this.state.rating}
            starDimension="15px"
            starSpacing="3px"
            starRatedColor="rgb(4,30,65)"
            starHoverColor="rgb(4,30,65)"
            changeRating={(e) => {this.changeRating(e)}}
            numberOfStars={5}
            name='rating'
        />
      );
    }
}