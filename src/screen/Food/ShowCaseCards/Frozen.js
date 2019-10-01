import React from 'react';
import {ProductSlider} from '../ProductSlider/ProductSlider'
import { CatagorySliderImages } from './images'
export const Frozen = () => {
    return (
        <div>
            <div className="container center" style={{ width: '80%' }}>
                <div className='row' ><h4 style={{textAlign: 'left'}} >Frozen</h4></div>
                <ProductSlider data={CatagorySliderImages} />
            </div>
        </div>
    )
}
