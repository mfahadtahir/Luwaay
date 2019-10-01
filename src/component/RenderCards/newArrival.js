import React, {Component} from 'react';

export default class NewArrival extends Component {
    render(){
        return(
            <div className=' featured' >
                <h2 className='center' >Featured Items</h2>
                <div className='container'>
                <hr />
                </div>
                <div className="card-main-container ">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="col s12 m4 l4 card">
                                <div className='card-image'
                                style={{
                                    background:"url('https://netstorage-legit.akamaized.net/images/39979f9ebca1079a.jpg?imwidth=900') center/cover no-repeat",
                                    height: 632
                                }}
                                >
                                </div>
                                <div className='card-content'>
                                    <h5>Chiffon Kimono | Colorless Material</h5>
                                    <hr />
                                    <h6 className='pink'>&#8358; 32.07</h6>
                                </div>
                            </div>
                            <div className="col s12 m7 l7" style={{
                                margin: 20,
                                marginTop: 0
                            }}>
                            <div className='row'>
                                <div className='col s10 m5 l5 card' style={{
                                    margin: 10
                                }} >
                                <div className='card-image'
                                style={{
                                    background:"url('https://i.pinimg.com/originals/4d/02/6e/4d026e5e5cc4377c53c7f58c34037b54.jpg') center/cover no-repeat",
                                    height: 250
                                }}
                                >
                                </div>
                                <div className='card-content'>
                                    <h6>Kimono Jacket | Outfit Ideas </h6>
                                    <hr />
                                    <p className='pink'>&#8358; 42.17</p>
                                </div>
                                </div>
                                <div className='col s10 m5 l5 card' style={{
                                    margin: 10
                                }}>
                                <div className='card-image'
                                style={{
                                    background:"url('https://images-na.ssl-images-amazon.com/images/I/715oYEfGPmL._UY606_.jpg') center/cover no-repeat",
                                    height: 250
                                }}
                                >
                                </div>
                                <div className='card-content'>
                                    <h6>Kimono Jacket | Outfit Ideas </h6>
                                    <hr />
                                    <p className='pink'>&#8358; 42.17</p>
                                </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col s10 m5 l5 card' style={{
                                    margin: 10
                                }}>
                                <div className='card-image'
                                style={{
                                    background:"url('http://www.nfashionso.com/content/images/thumbs/0000099_nfashionso-women-printed-loose-chiffon-kimono-cardigan-blouse-top-apricot-one-size_550.png') center/cover no-repeat",
                                    height: 250
                                }}
                                >
                                </div>
                                <div className='card-content'>
                                    <h6>Kimono Jacket | Outfit Ideas </h6>
                                    <hr />
                                    <p className='pink'>&#8358; 42.17</p>
                                </div>
                                </div>
                                <div className='col s10 m5 l5 card' style={{
                                    margin: 10
                                }}>
                                <div className='card-image'
                                style={{
                                    background:"url('https://img.shop.com/Image/260000/269800/269808/products/1632084967__400x400__.jpg') center/cover no-repeat",
                                    height: 250
                                }}
                                >
                                </div>
                                <div className='card-content'>
                                    <h6>Kimono Jacket | Outfit Ideas </h6>
                                    <hr />
                                    <p className='pink'>&#8358; 42.17</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}