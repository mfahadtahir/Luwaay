import React from 'react';
import firstBlog from '../../images/home/leather.PNG'
import secondBlog from '../../images/home/secondBlog.PNG'
import thirdBlog from '../../images/home/thirdBlog.PNG'

const OneBlog = (props) => {
    const {title, details, image} = props;
    return (
        <div className="col s12 m6 l4">
            <div className="card" style={{ minHeight: 200 }}>
                <div className="card-image">
                    <img src={image} alt='' style={{ height: 170 }} />
                </div>
                <div className="card-content flow-text" style={{ minHeight: 230, textAlign: "left", fontSize: 16, paddingLeft: 16, paddingRight: 16 }}>
                    <b>{title}</b>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}

export const Blogs = () => {
    return (
        <div className='row center' style={{ width: '80%' }}>
            <h5 style={{textAlign: "left"}}>Directly From Blogs</h5>
            <div className='row' >
                <OneBlog image={data[0].image} title={data[0].title} details={data[0].details} />
                <OneBlog image={data[1].image} title={data[1].title} details={data[1].details} />
                <OneBlog image={data[2].image} title={data[2].title} details={data[2].details} />
            </div>
        </div>
    )
}

const data = [
    {
        title: 'Minimalist Leather Bags and Wallets From Small Queue',
        details: 'Crafted by hand from beautiful, butteryleathers, these fun-sized accessories are perfect for traveling lightly and living simply.',
        image: firstBlog
    },
    {
        title: 'How to Shop for Statement Lighting on Etsy',
        details: 'Discover bright ideas for choosing a light fixture thats reflects your signature style and shop some of our favourite jaw-dropping designs.',
        image: secondBlog
    },
    {
        title: 'Style Spotlight: Fall Fashion Inspo With Sofiyat Ibrahim',
        details: "We're taking a page out of this grad student's book for our sesonal wardrobe refresh.",
        image: thirdBlog
    }
]