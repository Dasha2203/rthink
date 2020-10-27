import React, {useState, useEffect } from 'react'

import './Card.css';

function Card1 (props) {
    const [unfinishedPractice, setUnfinishedPractice] = useState(0);
    const [activeAnimation, setActiveAnimation] = useState(false);

    
    useEffect(() => {   
        let allTasks = document.querySelectorAll('.today-practice > .tasks > .card-block');
        let blockTasks= document.querySelectorAll('.today-practice > .tasks > .card-block .card-blocked');
        let doneTasks= document.querySelectorAll('.today-practice > .tasks > .card-block .card-done');
        
       
        setUnfinishedPractice(allTasks.length - blockTasks.length - doneTasks.length)
        
    });

    function getBlockedCard () {
        

        let allTasks = document.querySelectorAll('.today-practice > .tasks > .card-block');
        let blockTasks= document.querySelectorAll('.today-practice > .tasks > .card-block .card-blocked');
        let doneTasks= document.querySelectorAll('.today-practice > .tasks > .card-block .card-done');

        return allTasks.length - blockTasks.length - doneTasks.length

    }

    function toogleAnimation() {
        setActiveAnimation(true)
    }

    function animationEnd () {
        setActiveAnimation(false)
    }

    return (
        <div className={`card-block ${!props.content.blocked ? '' : 'card-block__blocked'}` }>
            <div onAnimationEnd = {animationEnd} className={`card ${props.content.done ? 'card-done': !props.content.blocked ? '' : 'card-blocked'}`} onClick={toogleAnimation}>
                <h1 className="card__title">{props.content.title}</h1>
                <p className="card__subtitle">{props.content.subTitle}</p>

                {props.content.done ?  <div>
                    <img src='done.svg' alt="image"/>
                </div> : 
                <div>
                    <img style={{width: `${props.content.title === 'Test  Math'? '100%' : 'auto'}`}} src={props.content.img} alt="image"/>
                </div>}
                {props.content.done === false && props.content.blocked === false && props.content.countCompletedTasks !==0 ? <div className="card-progress">
                    <div style={{width: `${props.content.countCompletedTasks/props.content.countTasks*100}%`}}></div>
                </div>: null}
                <div className="count-tasks">{props.content.countTasks}</div>
                {props.content.leadTime? <div className="lead-time">{props.content.leadTime} min</div>:null}
            </div>
            {props.content.blocked ? 
            <div className="back-card">
                <div className="back-card__content">
                    <div className="back-card__title">
                        <span>Not yet</span> <img src="back-smile.svg" alt="smile"/>
                    </div>
            <p>You still have {unfinishedPractice} unfinished {unfinishedPractice>1?'practices':'practice'}</p>
                </div>
            </div>:null}
        </div>
    ) 
}

export default Card1;