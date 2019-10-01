import React from 'react';
import {ProductSlider} from '../ProductSlider/ProductSlider'
import { CatagorySliderImages } from './images'
export const Beverages = () => {
    return (
        <div>
            <div className="container center" style={{ width: '80%' }}>
                <div className='row' ><h4 style={{textAlign: 'left'}} >Beverages</h4></div>
                <ProductSlider data={CatagorySliderImages} />
            </div>
        </div>
    )
}
