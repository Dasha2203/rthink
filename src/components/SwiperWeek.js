import { Swiper, SwiperSlide } from 'swiper/react';

import React, {useState} from 'react';
import SwiperCore, {Navigation , Pagination, EffectFade} from 'swiper';

// Import Swiper styles
//import 'swiper/swiper.scss';


import Accordion from './Accordion';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Navigation,Pagination, EffectFade]);

function SwiperWeek(props) {

    const [active, setActive] = useState('');
    const [setActiveAcc, setActiveAccState] = useState(false);
    // for slider
    const [activeAccWrapper, setAccWrapper] = useState();
  return (
    <div></div>
  );
};

export default SwiperWeek;