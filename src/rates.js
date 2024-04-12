import PopupForm from "./popupForm";
import { useRef, React, useState } from "react";
import {rateData} from './data'
import {useNavigate} from 'react-router-dom'
import $ from 'jquery';


const Rates = () => {
    let start=null;
    const rates=useRef(null);
    const popup=useRef(null);
    const [rate, stateRate]=useState('')
     function step3(start, element) {
        return function(timestamp) {
          if (!start) start = timestamp;
          var progress = timestamp - start;
        element.style.left = Math.min(progress/10-100, 0) + '%';
        if (progress < 1000) {
          window.requestAnimationFrame(step3(start, element));
        }
        }
      }

      function reverse(start, element) {
        return function(timestamp) {
          if (!start) start = timestamp;
          var progress = timestamp - start; 
          element.style.left = Math.max(progress/10, 0) + '%';    
          if (progress <1000) {
            window.requestAnimationFrame(reverse(start, element));
          }
        }
      }
    const clickRate=(e,rate)=>{
        stateRate(rate);
        const position=$(e.target).position();
        window.requestAnimationFrame(step3(start, popup.current));
        setTimeout(function(){
        popup.current.classList.add('open')
    },1100)
    }
    const popupClose=()=>{
        popup.current.classList.remove('open');
        setTimeout(function(){
          window.requestAnimationFrame(reverse(start, popup.current))
        },300)
   }
  
    const ratesRender=()=>{return rateData.map((item,i)=>{
        return <div className="item__rates " key={item.id}>
        <div className="item__wrapper">
        <div className="rate__heading">
            <div className="rate__title">{item.name}</div>
            <div className="rate__cost"><span>{item.cost}</span></div>
            <div className="rate__time">в час</div>
        
        </div>
        <ul className="rate__text">
            {rateData[i].discription.map((item, ind)=>{
                return <li key={ind}>{item.disc}</li>
            })}
        </ul>
        <button className="btn__rate btn" onClick={(e)=>clickRate(e,item.name2)}>свяжитесь с нами!</button>
    </div>
    </div>
    
    })
}
  
    return ( 
        <section className="rates" id='rates' ref={rates}>
        <div className="container">
            <div className="rates__heading">
                <div className="rates__title title">Тарифы</div>
            </div>
            <div className="rates__cards">
                {ratesRender()}
            </div>
            <div className="rates__footer">
                <span>Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!</span>
                <a href="" className="individ__rate">Получить индивидуальный тариф</a>
            </div>
        </div>
        <PopupForm ref={popup}  typeRate={rate} popupClose={popupClose}></PopupForm>
    </section>
     );
}
 
export default Rates;