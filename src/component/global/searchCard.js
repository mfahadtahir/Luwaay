import React, { Component } from 'react';

class SearchCard extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        var { value } = this.props;
        return (
            <div >
            {window.innerWidth > 700 ?

            <div id='filter' style={{ 
                padding: '0 30px',
                position: 'relative',
                bottom: 50,
                background: 'white',
                border: '1px solid lightgrey',
                zIndex: 20
                }}>
                <h4 className='center pink'>Filter Content</h4>
                <div className='container' ><hr /> <br /></div>
                    <div className="row" style={{
                    padding: 10
                }}>
                    <div className="filter-fields filter-fields col l3 l3">
                { value === "Clothing" ?
                  <select multiple={true}>
                    <option value="" disabled={true}>Size</option>
                    <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    <option value="">XXL</option> 
                  </select>
                  : value === "Accessories" ?
                  <select multiple={true}>
                    <option value="" disabled={true}>Size</option>
                    <option value="">S/M</option>
                    <option value="">L/XL</option>
                    <option value="">One Size</option>
                    </select>
                : value === "Shoes" ?
                    <select multiple={true} >
                    <option value="" disabled={true}>Size</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    </select> 
                    : value === "Nails" || value === "Face & Body" ?
                    <select multiple={true} >
                    <option value="" disabled={true}>Size</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    </select>
                  :null}
                </div>
                <div className="filter-fields filter-fields col m3 l3">
                  <select >
                    <option value="" disabled selected>Sort By</option>
                    <option value="" >Most Relevent</option>
                    <option value="" >Most Popular</option>
                    <option value="" >Newest In</option>
                    <option value="" >Featued</option>
                    <option value="" >Price( High To Low )</option>
                    <option value="" >Price ( Low To High )</option>
                  </select>
                </div>               
                <div className="filter-fields filter-fields col m3 l3">
                  <select multiple={true}>
                    <option value="" disabled selected>Colors</option>
                    <option value="" >Red</option>
                    <option value="" >Blue</option>
                    <option value="" >Green</option>
                    <option value="" >Yellow</option>
                    <option value="" >Black</option>
                    <option value="" >White</option>
                  </select>
                  <label>Colors</label>
                </div>               
                <div className="filter-fields filter-fields col m3 l3">
                {value === "Shoes" ?
                    <select multiple={true} >
                    <option value="" disabled={true}>Wear To</option>
                    <option value="">Casual</option>
                    <option value="">Going Out</option>
                    </select> 
                  :
                  <select multiple={true}>
                  <option value="" disabled={true}>Wear To</option>
                  <option value="">Party</option>
                  <option value="">Beach</option>
                  <option value="">Casual</option>
                </select>}
                </div>    
                <a href='#!' style={{
                      background: 'transparent',
                      opacity: .8,
                      padding: '0px 5px',
                      lineHeight: 3,
                      letterSpacing: 5,
                      color: 'black',
                      border: '1px solid black'
                  }} className='left'><span className='pink' style={{fontSize: 14}}> 100+ </span> Products</a>           
          
                <a href='#!' style={{
                      background: 'transparent',
                      opacity: .8,
                      padding: '0px 5px',
                      lineHeight: 3,
                      letterSpacing: 5,
                      color: 'black',
                      border: '1px solid black'
                  }} className='right  dropdown-trigger' data-target='views'>View<span className='pink'  style={{fontSize: 14}}> 80 <i style={{marginTop: 8}} className='material-icons small right'>expand_more</i></span> </a>           
            <ul className='dropdown-content' id='views'>
            <li><a href='#!'>40</a></li>
            <li><a href='#!'>80</a></li>
            <li><a href='#!'>120</a></li>
            </ul>
          </div>
                  </div>:

                  <div className='container' >
              <button className='btn btn-large col s8 center pink-bg'
               style={{marginLeft: 45, marginTop: 10, marginBottom: 10}}
                >Filter</button>
                    <a href='#!' style={{
                      background: 'transparent',
                      opacity: .8,
                      padding: '0px 5px',
                      lineHeight: 3,
                      letterSpacing: 5,
                      color: 'black',
                      border: '1px solid black'
                  }} className='left'><span className='pink' style={{fontSize: 14}}> 100+ </span> Products</a>           
          
                <a href='#!' style={{
                      background: 'transparent',
                      opacity: .8,
                      padding: '0px 5px',
                      lineHeight: 3,
                      letterSpacing: 5,
                      color: 'black',
                      border: '1px solid black'
                  }} className='right  dropdown-trigger' data-target='views'>View<span className='pink'  style={{fontSize: 14}}> 80 <i style={{marginTop: 8}} className='material-icons small right'>expand_more</i></span> </a>           
            <ul className='dropdown-content' id='views'>
            <li><a href='#!'>40</a></li>
            <li><a href='#!'>80</a></li>
            <li><a href='#!'>120</a></li>
            </ul>
                  </div>}
                  
            </div>
            
        )
    }

}

export default SearchCard;