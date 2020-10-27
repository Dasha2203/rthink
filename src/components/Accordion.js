import React, {useState, useRef} from 'react';

import Card1 from './Card1';
import './Accordion.css';

function Accordion(props) {

    // const [setActiveAcc, setActiveAccState] = useState('');
    const [setHeight, setHeightState] = useState('0px');

    const content = useRef(null);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(); 
    // console.log(date)

    function toggleAccordion() {
        props.setActive(false);
        if( props.active === props.idac) {
            console.log('пустота');
            props.setActive(false);
            console.log(props.active)
            props.setActiveAccState(!props.setActiveAcc);
        } else {
            console.log('и сюда')
            console.log(props.active)
            props.setActive(props.idac);
            props.setActiveAccState(!props.setActiveAcc);
            setHeightState(props.active === props.idac ?'0px' : `${content.current.scrollHeight}px`);
        }
        
    }

    function getWeekDay(date) {
        if (days[date.getDay()] === props.day) {
            return 'Today'
        } else {
            return days[date.getDay()];
        }
        
    }

    return (
        <div className="accordion">

            <div className={`day ${props.day === 'Today' ? 'day-today': ''} ${props.active === props.idac? 'active' : ''}`} onClick={toggleAccordion}>
                
                {/* {console.log('ВЫполнено ' + props.done)} */}
                <div className="left-block">
                    {props.done ? <img src="star.svg" alt="img"/>: 
                        props.block ? <img src="lock.png" alt="lock"/> :null}
                    <div className="day__title" style={{marginLeft: `${props.day === 'Today' ? '0px': null}`}}>
                        {props.day === 'Today' ?
                            <p>
                                <span className="today">Today </span> 
                                Ready, Set, <span>Go!</span>
                            </p>
                        : null} 
                        {
                            props.block ? `${props.day}!`: props.day !== 'Today'? <p>{props.day} <span>Done!</span></p> : null 
                        }

                    </div>
                </div>
                <div className="progress-bar"><div></div></div>
                <div className="right-block">
                    
                    {props.done ? 
                    <div className="star-earn"><div className="count-star">30</div><p>Stars earned!</p></div>:null}
                    <p className={`status-button ${props.active === props.idac? 'active' : ''}` }>{props.active === props.idac ? 'Hide' : 'Open'}
                    </p>
                </div>
            </div>

            <div 
                ref={content}
                style={{maxHeight: `${props.active === props.idac ? setHeight : '0px'}`}} 
                className={`day-tasks`}
            >

            <div className="tasks">
                {
                    props.testObj.card.map(item =>  {
                    return <Card1 content={item}/>
                })
                }
            </div>  
            </div>
        </div>
    );
}

export default Accordion;