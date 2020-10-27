import './App.css';
import React, {useState} from 'react'
import 'swiper/swiper-bundle.css';
import Card1 from './components/Card1'
import Swiper1 from './components/Swiper'

let testObj = {
  card: [
    {
      title: 'Math',
      subTitle: 'Mrs. Name',
      img: 'done.svg',
      done: true,
      countTasks: 10,
      countCompletedTasks:10,
      blocked: false,
      leadTime: false
    },
    {
      title: 'Logic',
      subTitle: 'Mrs. Lisa',
      img: 'logic.svg',
      done:false,
      countTasks: 10,
      countCompletedTasks:3,
      blocked: false,
      leadTime: false
    },
    {
      title: 'Test  Math',
      subTitle: 'Mrs. Lisa',
      img: 'test-math.svg',
      done:false,
      countTasks: 10,
      countCompletedTasks:0,
      blocked: false,
      leadTime: '20'
    },
    {
      title: 'Thinking 3D',
      subTitle: 'Mrs. Lisa',
      img: 'icon_3d.svg',
      done:false,
      countTasks: 10,
      countCompletedTasks:0,
      blocked: false,
      leadTime: false
    },
    {
      title: 'Regularity',
      subTitle: 'Mrs. Lisa',
      img: 'regularity.svg',
      done:false,
      countTasks: 10,
      countCompletedTasks:0,
      blocked: true,
      leadTime: false
    },
    {
      title: 'Beyond Z',
      subTitle: '',
      img: 'smile.svg',
      done:false,
      countTasks: 10,
      countCompletedTasks:0,
      blocked: true,
      leadTime: false
    }
  ]
}


console.log(testObj.card[1].title);
testObj.card.map(item => console.log(item.title));

function App() {
  // for accordion
  const [active, setActive] = useState('');
  const [setActiveAcc, setActiveAccState] = useState(false);
  // for slider
  const [activeAccWrapper, setAccWrapper] = useState();

  

  return (
    <div className="dashboard">
      <div className="today-practice">
        <h1 className="title"> Today’s practice</h1>
        <div className="tasks">
          { 
            testObj.card.map(item =>  {
              return <Card1 content={item} data={testObj}/>
            })
          }
        </div>
      </div>
      <div>
        <Swiper1 obj={testObj}/>
        {/* <div  className="controll-slider">
          <div className='left-arrow' onClick={handleLeftSlider}><img src="left-arrow.svg" alt="left-arrow"/></div>
          <h3 className="slider-title active">This week practice</h3>
          <h3 className="slider-title">Next week practice</h3>
          <div className='right-arrow' onClick={handleRightSlider}><img src="right-arrow.svg" alt="left-arrow"/></div>
        </div> */}
        {/* <SwiperWeek /> */}
        {/* <div className="accordion-wrapper" id="2">
          <Accordion block={false} done={true} open={false} day = 'Monday' idac = '1' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={false} done={false} open={false} day = 'Today' idac = '2' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Wednesday' idac = '3' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Thursday' idac = '4' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Friday' idac = '5' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Saturday' idac = '6' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Sunday' idac = '7' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
        </div>
        <div className="accordion-wrapper" id="3">
          <Accordion block={false} done={true} open={false} day = 'Monday' idac = '1' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={false} done={false} open={false} day = 'Today' idac = '2' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Wednesday' idac = '3' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Thursday' idac = '4' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Friday' idac = '5' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Saturday' idac = '6' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
          <Accordion block={true} done={false} open={false} day = 'Sunday' idac = '7' testObj = {testObj}  active={active} setActive = {setActive} setActiveAcc={setActiveAcc} setActiveAccState={setActiveAccState}/>
        </div> */}
      </div>
    </div>
  );
}

export default App;
