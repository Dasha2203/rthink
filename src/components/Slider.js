import React, {useState, useEffect, useLayoutEffect } from 'react'

import './Slider.css'


function Slider (props) {

    const [currentItem, setCurrentItem] = useState(0);
    const [sliderTitle, setSliderTitle] = useState(()=> document.querySelectorAll('.slider-title'));
    
    function upState () {
        let alltitle = document.querySelectorAll('.slider-title');
        //setSliderTitle(alltitle)
    }
    // useEffect(() => {   
    //     upState();
    // });

    useLayoutEffect (() => {
        let alltitle = document.querySelectorAll('.slider-title');
    })

    function changeCurrentItem(n) {
        setCurrentItem((n + sliderTitle.length) % sliderTitle.length)
        //setSliderTitle(alltitle)
    }

    function hideItem () {
        console.log(sliderTitle)
        sliderTitle[currentItem].classList.remove('active')
    }

    function showItem() {
        sliderTitle[currentItem].classList.add('active')
    }

    function handleLeftSlider() {

    }

    function handleRightSlider() {
        hideItem();
        changeCurrentItem(currentItem + 1);
        showItem();
    }

    return (
        <div  className="control-slider">
            <div className="left-arrow" onClick={handleLeftSlider}><img src="left-arrow.svg" alt="left-arrow"/></div>
            <h3 className="slider-title active">This week practice</h3>
            <h3 className="slider-title">Next week practice</h3>
            <div className="right-arrow" onClick={handleRightSlider}><img src="right-arrow.svg" alt="left-arrow"/></div>
        </div> 
    );
}

export default Slider;