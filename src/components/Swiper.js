// Import Swiper React components
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation , Pagination, EffectFade, Controller} from 'swiper';

// Import Swiper styles
//import 'swiper/swiper.scss';



import Accordion from './Accordion';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Slider.css';

SwiperCore.use([Navigation,Pagination, EffectFade, Controller]);

function Swiper1(props) {
    const [active, setActive] = useState('');
    const [setActiveAcc, setActiveAccState] = useState(false);
    // for slider
    const [activeAccWrapper, setAccWrapper] = useState();
    const [index,setindex] = useState(1);
    const [firstSwiper, setFirstSwiper] = useState(2);
    const [secondSwiper, setSecondSwiper] = useState(2);
    //setFirstSwiper(index)
    //setindex(22)

  


  function upIndex(i) {

  }
  return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                
                navigation
                effect="cube"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(a, b) => upIndex(a.activeIndex)}
                onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}
                >
                <SwiperSlide key="slide-1">
                    <h3 className="slider-title">Prev week practice</h3>
                </SwiperSlide>
                <SwiperSlide key="slide-2">
                    <h3 className="slider-title">This week practice</h3>
                </SwiperSlide>
                <SwiperSlide key="slide-3">
        <h3 className="slider-title">Next week practice</h3>
      </SwiperSlide>
    </Swiper>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            
            
            effect="cube"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(a, b) => console.log(a)}
            onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}
    >
      <SwiperSlide key="slide-1">
      <div className="accordion-wrapper active" id="1">
          <Accordion block={false} done={true} open={false} day = 'Monday' idac = '1' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={false} done={false} open={false} day = 'Today' idac = '2' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Wednesday' idac = '3' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Thursday' idac = '4' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Friday' idac = '5' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Saturday' idac = '6' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Sunday' idac = '7' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
        </div>
      </SwiperSlide>
      <SwiperSlide key="slide-2">
      <div className="accordion-wrapper active" id="1">
          <Accordion block={false} done={true} open={false} day = 'Monday' idac = '1' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={false} done={false} open={false} day = 'Today' idac = '2' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Wednesday' idac = '3' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Thursday' idac = '4' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Friday' idac = '5' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Saturday' idac = '6' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Sunday' idac = '7' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
        </div>
      </SwiperSlide>
      <SwiperSlide key="slide-3">
      <div className="accordion-wrapper active" id="1">
          <Accordion block={false} done={true} open={false} day = 'Monday' idac = '1' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={false} done={false} open={false} day = 'Today' idac = '2' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Wednesday' idac = '3' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Thursday' idac = '4' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Friday' idac = '5' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Saturday' idac = '6' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Sunday' idac = '7' testObj = {props.obj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
        </div>
      </SwiperSlide>
    </Swiper>
    
    </div>
    

    
  );
};

export default Swiper1;