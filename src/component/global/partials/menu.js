import React from 'react';

export const Nails = () => {
    var nailCateg1 = ['MasterPiece ', 'Fantacy Collection', 'Salon Acrylic', 'Everlasting French'],
    nailCateg2 = ['Color Nails', 'Decorated Nails', 'French & Nude', 'Natural'],
    nailCateg3 = ['Nail Art & Stickers', 'Nail Glue & Removers', 'Impress Press-on Nails', 'Gel & Acrylic Kit'];
    
        return(
            
        <div id="navMenu">
            <div id='nailMenu' style={{ border: '2px solid #f0458cee', borderLeft: 0, borderRight: 0}}>
            <div className='row'>
            <div className='col m12 l12' >
                <h5 style={{ letterSpacing: 15, fontWeight: 'bolder'}} className='pink center'>Nails</h5>
                <div className='container'><hr style={{    borderColor: '#f0458cee !important' }}/></div>
                <div className='col m3 l3'>
                <img width='100%' height='350px' className='left' alt='' style={{ borderRight: '5px solid lightgrey', padding: 50, paddingRight: 0}}
                 src='https://cdn.shopify.com/s/files/1/0204/0931/9524/products/product-image-889604311_1024x1024.jpg?v=1548332777' />
                </div>
                <ul className='col m3 l3'>
                {nailCateg1.map((nail, id) => {
                    return <li style={{width: '100%', letterSpacing: 2}} key={id}><a href='#!'>{nail}</a></li>
                })}
                </ul>
                <ul className='col m3 l3'>
                {nailCateg2.map((nail, id) => {
                    return <li style={{width: '100%', letterSpacing: 2}} key={id}><a href='#!'>{nail}</a></li>
                })}
                </ul>
                <ul className='col m3 l3'>
                {nailCateg3.map((nail, id) => {
                    return <li style={{width: '100%', letterSpacing: 2}} key={id}><a href='#!'>{nail}</a></li>
                })}
                </ul>
            </div>
            </div>
            </div>
        </div>)
}

export const Shoes = () => {
    var shoeCateg1 = ['Heels', 'Sandals', 'Sneakers', 'Sliders & Flipflops'],
    shoeCateg2 = ['Boots & Booties', 'Flats', 'Loafers', 'Trainers'];

    return(
        <div id="navMenu">
        <div id='shoeMenu' style={{ border: '2px solid #f0458cee', borderLeft: 0, borderRight: 0}} >
        <div className='row'>
        <div className='col m12 l12' >
            <h5 style={{ letterSpacing: 15, fontWeight: 'bolder'}} className='pink center'>Shoes</h5>
            <div className='container'><hr style={{    borderColor: '#f0458cee !important' }}/></div>
            <div className='col m4 l4'>
            <img width='100%' height='350px'  alt='' className='left' style={{ borderRight: '5px solid lightgrey', padding: 50, paddingRight: 0}}
             src='http://picture-cdn.wheretoget.it/h7kzm2-i.jpg' />
            </div>
            <ul className='col m4 l4'>
            {shoeCateg1.map((shoe, id) => {
            return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{shoe}</a></li>  
            })}
            </ul>
            <ul className='col m4 l4'>
            {shoeCateg2.map((shoe, id) => {
            return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{shoe}</a></li>  
            })}
            </ul>
        </div>
        </div>
        </div>
    </div>)
}

export const Clothing = () => {
    var  dress1 = ['Active Wear', 'Co-ords', 'Coats & Jackets', 'Hoodies & SweatShirts', 'Suits & Seperates'],
    dress2 = ['Jeans', 'Jumpers & Cardigons', 'Jumpsuits & Playsuits', 'Kimonos', 'Tops'],
    dress3 = ['Lingerie & Nightwear', 'Loungewear', 'Shorts', 'Skirts', 'Socks & Tights'];

    return(
        <div id="navMenu">
        <div id='clothMenu' style={{ border: '2px solid #f0458cee', borderLeft: 0, borderRight: 0}} >
        <div className='row'>
        <div className='col m12 l12' >
            <h5 style={{ letterSpacing: 15, fontWeight: 'bolder'}} className='pink center'>Clothes</h5>
            <div className='container'><hr style={{    borderColor: '#f0458cee !important' }} /></div>
            <div className='col m3 l3'>
            <img width='100%' height='350px' className='left' alt='' style={{ borderRight: '5px solid lightgrey', padding: 50, paddingRight: 0}} 
            src='https://i.pinimg.com/originals/65/56/71/655671b8f52c52eea98b2d5ac873b168.jpg' />
            </div>
            <ul className='col m3 l3'>
            {dress1.map((cloth,id) => {
                return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{cloth}</a></li>  
            })}
            </ul>
            <ul className='col m3 l3'>
            {dress2.map((cloth,id) => {
                return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{cloth}</a></li>  
            })}
            </ul>
            <ul className='col m3 l3'>
            {dress3.map((cloth,id) => {
                return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{cloth}</a></li>  
            })}
            </ul>
        </div>
        </div>
        </div>
    </div>)
}
export const Accessories = () => {
    var access1 = ['LegWear', 'Hair Accessories', 'Beauty', 'Jewelry'],
    access2 = ['HandBags', 'SunGlasses', 'Belts', 'Hats & Scarves'],
    access3 = ['Necklaces', 'Braceletes', 'Rings', 'Earrings'];

    return(
        
    <div id="navMenu">
        <div id='accessMenu' style={{ border: '2px solid #f0458cee', borderLeft: 0, borderRight: 0}}>
        <div className='row'>
        <div className='col m12 l12' >
            <h5 style={{ letterSpacing: 15, fontWeight: 'bolder'}} className='pink center'>Accessories</h5>
            <div className='container'><hr style={{    borderColor: '#f0458cee !important' }}/></div>
            <div className='col m3 l3'>
            <img width='100%' height='350px' className='left' alt='' style={{ borderRight: '5px solid lightgrey', padding: 50, paddingRight: 0}} 
            src='https://www.cathkidston.com/pws/client/images/catalogue/products/862691/medium/862691.jpg' />
            </div>
            <ul className='col m3 l3'>
                {access1.map((data, id) => {
                    return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{data}</a></li>  
                })}
            </ul>
            <ul className='col m3 l3'>
                {access2.map((data, id) => {
                    return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{data}</a></li>  
                })}
            </ul>
            <ul className='col m3 l3'>
                {access3.map((data, id) => {
                    return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{data}</a></li>  
                })}
            </ul>
        </div>
        </div>
        </div>
    </div>)
}
export const FAB = () => {
    var  fAB1 = ['Body Care', 'Hair Care', 'Makeup', 'Tools & Accessories'],
    fAB2 = ['Skin Care', 'Suncare & Tanning', 'Makeup Sets', 'Gifts'];
    return(
        
    <div id="navMenu">
        <div id='fABMenu' style={{ border: '2px solid #f0458cee', borderLeft: 0, borderRight: 0}}>
        <div className='row'>
        <div className='col m12 l12' >
            <h5 style={{ letterSpacing: 15, fontWeight: 'bolder'}} className='pink center'>Face & Body</h5>
            <div className='container'><hr style={{    borderColor: '#f0458cee !important' }}/></div>
            <div className='col m4 l4'>
            <img width='100%' height='350px' className='left' alt='' style={{ borderRight: '5px solid lightgrey', padding: 50, paddingRight: 0}} 
            src='https://www.lavera.de/typo3temp/fl_realurl_image/de-104338-naturalmoussemakeup-ivory01-01-29dca-aba7f21dbf-185a1.png' />
            </div>
            <ul className='col m4 l4'>
            {fAB1.map((data, id) => {
                return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{data}</a></li>  
            })}
            </ul>
            <ul className='col m4 l4'>
            {fAB2.map((data, id) => {
                return <li key={id} style={{width: '100%', letterSpacing: 2}}><a  href='#!' >{data}</a></li>  
            })}
            </ul>
        </div>
        </div>
        </div>
    </div>)
}

export const CheckAndRender = (disableElem) => {

    var nails = document.getElementById('Nails'),
    nailMenu = document.getElementById('nailMenu'),

    shoes = document.getElementById('Shoes'),
    shoeMenu = document.getElementById('shoeMenu'),

    clothing = document.getElementById('Clothing'),
    clothMenu = document.getElementById('clothMenu'),

    accessories = document.getElementById('Accessories'),
    accessMenu = document.getElementById('accessMenu'),

    fAB = document.getElementById('Face & Body'),
    fABMenu = document.getElementById('fABMenu');

     if(nails && nailMenu && disableElem !== 'Nails'){
         
        nails.onmouseover = () => {
            nailMenu.style.display = 'block';
            Nails();
        } 
        nailMenu.onmouseover = () => {
            nailMenu.style.display = 'block';
            Nails();
        } 
        
        nails.onmouseout = () => {
            nailMenu.style.display = 'none';
        }
        nailMenu.onmouseout = () => {
            nailMenu.style.display = 'none';
        }
    }
    if(shoes && shoeMenu && disableElem !== 'Shoes'){
        shoes.onmouseover = () => {
            shoeMenu.style.display = 'block';
            Shoes()
        } 
        shoeMenu.onmouseover = () => {
            shoeMenu.style.display = 'block';
            Shoes();
        } 
        
        shoes.onmouseout = () => {
            shoeMenu.style.display = 'none';
        }
        shoeMenu.onmouseout = () => {
            shoeMenu.style.display = 'none';
        }
    } 
    if(clothing && clothMenu && disableElem !== "Clothing"){
        clothing.onmouseover = () => {
            clothMenu.style.display = 'block';
            Clothing();
        } 
        clothMenu.onmouseover = () => {
            clothMenu.style.display = 'block';
            Clothing();
        } 
        
        clothing.onmouseout = () => {
            clothMenu.style.display = 'none';
        }
        clothMenu.onmouseout = () => {
            clothMenu.style.display = 'none';
        }
    } 
    if(accessories && accessMenu && disableElem !== 'Accessories'){
        accessories.onmouseover = () => {
            accessMenu.style.display = 'block';
            Accessories()
        } 
        accessMenu.onmouseover = () => {
            accessMenu.style.display = 'block';
            Accessories()
        } 
        
        accessories.onmouseout = () => {
            accessMenu.style.display = 'none';
        }
        accessMenu.onmouseout = () => {
            accessMenu.style.display = 'none';
        }
    } 
    if(fAB && fABMenu && disableElem !== 'FAB'){
        fAB.onmouseover = () => {
            fABMenu.style.display = 'block';
            FAB()
        } 
        fABMenu.onmouseover = () => {
            fABMenu.style.display = 'block';
            FAB()
        } 
        
        fAB.onmouseout = () => {
            fABMenu.style.display = 'none';
        }
        fABMenu.onmouseout = () => {
            fABMenu.style.display = 'none';
        }
    } 
    
    
}

export const hideAllMenu = () => {
    var arr = ["nailMenu", "shoeMenu","clothMenu", "accessMenu","fABMenu"];

    arr.map(data => {
        return document.getElementById(data) ? document.getElementById(data).style.display = 'none' : null;
    })
}

