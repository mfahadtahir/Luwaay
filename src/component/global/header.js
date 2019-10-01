import React from 'react';
import {Link} from 'react-router-dom';
import 'react-animated-slider/build/horizontal.css';

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            nail1: ['MasterPiece ', 'Fantacy Collection', 'Salon Acrylic', 'Everlasting French'],
            nail2: ['Color Nails', 'Decorated Nails', 'French & Nude', 'Natural'],
            nail3: ['Nail Art & Stickers', 'Nail Glue & Removers', 'Impress Press-on Nails', 'Gel & Acrylic Kit'],
            shoe1: ['Heels', 'Sandals', 'Sneakers', 'Sliders & Flipflops'],
            shoe2: ['Boots & Booties', 'Flats', 'Loafers', 'Trainers'],
            dress1: ['Active Wear', 'Co-ords', 'Coats & Jackets', 'Hoodies & SweatShirts', 'Suits & Seperates'],
            dress2: ['Jeans', 'Jumpers & Cardigons', 'Jumpsuits & Playsuits', 'Kimonos', 'Tops'],
            dress3: ['Lingerie & Nightwear', 'Loungewear', 'Shorts', 'Skirts', 'Socks & Tights'],
            access1: ['LegWear', 'Hair Accessories', 'Beauty', 'Jewelry'],
            access2: ['HandBags', 'SunGlasses', 'Belts', 'Hats & Scarves'],
            access3: ['Necklaces', 'Braceletes', 'Rings', 'Earrings'],
            fAB1: ['Body Care', 'Hair Care', 'Makeup', 'Tools & Accessories'],
            fAB2: ['Skin Care', 'Suncare & Tanning', 'Makeup Sets', 'Gifts'],
            otherStuff: ['New Arrival', 'Maternity','Clothes', 'Gift Vouchers']
        }
    }
    render() {
        const {text} = this.props
        const {nail1, nail2, nail3, shoe1, shoe2, dress1, dress2, dress3, access1, access2, access3, fAB2, fAB1, otherStuff} = this.state
        return (
            <div className=""  >
                {text === "nail" ?
                    <div className="header-men"
                     style={{
                        background: window.innerWidth > 100 && window.innerWidth < 700 ?
                    "url('https://s2.best-wallpaper.net/wallpaper/iphone/1711/Girl-red-lips-makeup_iphone_320x480.jpg') center/cover no-repeat" :
                     "url('https://pw.artfile.me/wallpaper/11-12-2013/650x407/raznoe-guby-rozovaya-pomada-blestki-772977.jpg') center/cover no-repeat"
                     }}  >
              {window.innerWidth > 700 ? 
                    <div>
                    <br />
                     <br />
                     <br /> </div> : null }
                            <h1 className="header-content" style={{ position: 'realtive', zIndex: 10,color: 'white', fontWeight: 'bold', background: 'black', opacity: 0.5 }}>Fashion Nails</h1>
                            <div className="row">
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {nail1.map((data, id) => {
                                            return (
                                            <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>)
                                        })}
                                    </ol>
                                </div>
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {nail2.map((data,id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {nail3.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                    </div> 
                    : text === 'shoes' ?
                    <div className="header-men" 
                    style={{
                        background: window.innerWidth > 100 && window.innerWidth < 700 ?
                        "url('http://www.bondesigns.co.uk/images/cate_24/640/2018-Autumn-Women-Boots-Pointed-Toe-Ankle-Boots-Solid-Buckle-Strap-Women-Shoes-Leather-Ladies-Short-Boots-chaussures-femme-AVHD47827-bap0.jpg') center/cover no-repeat" :
                    "url('https://footage.framepool.com/shotimg/qf/529693699-women-shoes-sandal-high-heeled-shoe-trendy.jpg') center/cover no-repeat" 
                     }}>
              {window.innerWidth > 700 ? 
                    <div>
                    <br />
                     <br />
                     <br /> </div> : null }
                    <h1 className="header-content " style={{ position: 'realtive', zIndex: 10,color: 'white', fontWeight: 'bold', background: 'black', opacity: 0.5 }}>Fashion Shoes</h1>
                    <div className="row">
                        <div className="col s12 m6 l6">
                            <ol>
                                {shoe1.map((data, id) => {
                                    return <li key={id}>
                                        <Link to='#!' >{data}</Link>
                                    </li>
                                })}
                            </ol>
                        </div>
                        <div className="col s12 m6 l6">
                            <ol>
                                {shoe2.map((data, id) => {
                                    return <li key={id}>
                                        <Link to='#!' >{data}</Link>
                                    </li>
                                })}
                            </ol>
                        </div>
                    </div>
            </div> 
            : text === 'clothing' ?
            <div className="header-men clothingHeader"
            style={{
                background: window.innerWidth > 100 && window.innerWidth < 700 ?
            "url('https://i.ebayimg.com/images/g/ZosAAOSwYeRaGfh8/s-l300.jpg') center/cover no-repeat" :
             "url('https://cdn.clien.net/web/api/file/F01/4920711/f70f12d991d34ed492f.JPG?w=780&h=30000') center/cover no-repeat"
             }}
            >
           {window.innerWidth > 700 ? 
                    <div>
                    <br />
                     <br />
                     <br /> </div> : null }
                            <h1 className="header-content" style={{ position: 'realtive', zIndex: 10,color: 'white', fontWeight: 'bold', background: 'black', opacity: 0.5 }}>Clothing/Dress</h1>
                            <div className="row">
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {dress1.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {dress2.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {dress3.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                    </div> 
                    : text === 'accessories' ?
                    <div className="header-men"
                    style={{
                        background: window.innerWidth > 100 && window.innerWidth < 700 ?
                    "url('https://previews.123rf.com/images/kitzcorner/kitzcorner1704/kitzcorner170400061/77314918-fashion-summer-women-clothes-set-with-cosmetics-and-accessories-flat-lay-top-view.jpg') center/cover no-repeat" :
                     "url('https://freedesignfile.com/upload/2017/06/Fashion-summer-women-and-cosmetics-and-accessories-HD-picture-06.jpg') center/cover no-repeat"
                     }}
                    >
                 {window.innerWidth > 700 ? 
                    <div>
                    <br />
                     <br />
                     <br /> </div> : null }
                            <h1 className="header-content" style={{ position: 'realtive', zIndex: 10,color: 'white', fontWeight: 'bold', background: 'black', opacity: 0.5 }}>Accessories</h1>
                            <div className="row">
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {access1.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {access2.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                                <div className="col s12 m4 l4">
                                    <ol>
                                        {access3.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                    </div> 
                    : text === 'faceBody' ?
                    <div className="header-men"
                    style={{
                        background: window.innerWidth > 100 && window.innerWidth < 700 ?
                    "url('https://media.allure.com/photos/5bc6319bb9ed082d964e5fd8/3:4/w_1262,h_1683,c_limit/best-face-masks-of-all-time-lede.jpg') center/cover no-repeat" :
                     "url('https://media.allure.com/photos/5bc6319cb18e402d2e5e431f/16:9/w_1600,c_limit/best-face-masks-of-all-time-social.jpg') center/cover no-repeat"
                     }}
                    >
                  {window.innerWidth > 700 ? 
                    <div>
                    <br />
                     <br />
                     <br /> </div> : null }
                            <h1 className="header-content" style={{ position: 'realtive', zIndex: 10,color: 'white', fontWeight: 'bold', background: 'black', opacity: 0.5 }}>Face & Body</h1>
                            <div className="row">
                                <div className="col s12 m6 l6">
                                    <ol>
                                        {fAB1.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                                <div className="col s12 m6 l6">
                                    <ol>
                                        {fAB2.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                    </div> 
                    : text === 'other' ?
                    <div className="header-men"
                    style={{
                        background: window.innerWidth > 100 && window.innerWidth < 700 ?
                    "url('https://thumborcdn.acast.com/-F-w7a8fVzntj2EjzES-mb76blQ=/3000x3000/https://mediacdn.acast.com/assets/131ef191-d7e9-4993-b452-2bf62c368996/cover-image-jtynih86-lets_discuss_offical_artwork.jpg') center/cover no-repeat" :
                     "url('https://ak5.picdn.net/shutterstock/videos/13122695/thumb/1.jpg') center/cover no-repeat"
                     }}
                    >
                    {window.innerWidth > 700 ? 
                    <div>
                    <br />
                     <br />
                     <br /> </div> : null }
                            <h1 className="header-content" style={{ position: 'realtive', zIndex: 10,color: 'white', fontWeight: 'bold', background: 'black', opacity: 0.5 }}>Other Stuff</h1>
                            <div className="row">
                                <div className="col s12 m12 l12 center">
                                    <ol>
                                        {otherStuff.map((data, id) => {
                                            return <li key={id}>
                                                <Link to='#!' >{data}</Link>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                    </div> 
                    : null
                }
            </div>
        )
    }
}

export default Header;