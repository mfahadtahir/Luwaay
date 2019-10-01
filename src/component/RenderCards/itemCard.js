import React, {Component} from 'react';
import { Article } from './categCards';

export default class ItemCard extends Component {
    render(){
        const imgDetail = [
                        {image: 'https://images-na.ssl-images-amazon.com/images/I/61bLRZjQGYL._UX522_.jpg',
                        title: 'Dress Product | Any Brand',
                        subtitle: 'SHOP NOW',
                        leftBtn: <i className='material-icons ' >favorite</i>,
                        price:  'PRICE: 40.45$' },
                        {image: 'https://images-na.ssl-images-amazon.com/images/I/61bLRZjQGYL._UX522_.jpg',
                        title: 'Dress Product | Any Brand',
                        subtitle: 'SHOP NOW', 
                        leftBtn: <i className='material-icons ' >favorite</i>,
                        price:  'PRICE: 40.45$' },
                        {image: 'https://images-na.ssl-images-amazon.com/images/I/61bLRZjQGYL._UX522_.jpg', 
                        title: 'Dress Product | Any Brand', 
                        subtitle: 'SHOP NOW', 
                        leftBtn: <i className='material-icons ' >favorite</i>,
                        price:  'PRICE: 40.45$' },
                        {image: 'https://images-na.ssl-images-amazon.com/images/I/61bLRZjQGYL._UX522_.jpg', 
                        title: 'Dress Product | Any Brand', 
                        subtitle: 'SHOP NOW', 
                        leftBtn: <i className='material-icons ' >favorite</i>,
                        price:  'PRICE: 40.45$' },
                        {image: 'https://images-na.ssl-images-amazon.com/images/I/61bLRZjQGYL._UX522_.jpg', 
                        title: 'Dress Product | Any Brand', 
                        subtitle: 'SHOP NOW',
                        price:  'PRICE: 40.45$' },
                        {image: 'https://images-na.ssl-images-amazon.com/images/I/61bLRZjQGYL._UX522_.jpg', 
                        title: 'Dress Product | Any Brand', 
                        subtitle: 'SHOP NOW', 
                        leftBtn: <i className='material-icons ' >favorite</i>,
                        price:  'PRICE: 40.45$' }]
        return(<div className={window.innerWidth < 900 ? 'container' : ''}>
            {imgDetail.map((imgData, id) => {
            return <Article key={id} data={imgData} />
            })}
        </div>)
    }
}