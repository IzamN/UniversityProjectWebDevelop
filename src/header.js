import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Link, useNavigate } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
 
const Header = () => {
    const burger = React.useRef(null);
    const navlist=React.useRef(null)
    const clickBurger=(e)=>{
        if (burger.current.classList.contains('active')){
            burger.current.classList.remove('active')
            navlist.current.classList.remove('active')
            enableBodyScroll(navlist.current)
        }
        else{
            burger.current.classList.add('active')
            navlist.current.classList.add('active')
            disableBodyScroll(navlist.current)
        }   
    }
    const clickLink=()=>{
        if (burger.current.classList.contains('active')) clickBurger();
        window.scrollTo(0, 0);
    }
   const nav=useNavigate()
    return ( 
        <section className="header" id="header">
        <img className='bg-video' src='./img/header/video.png'></img>
        <video className='video' src='./video/video.mp4'   autoPlay loop muted>
        </video>
        <img className="background-header" src='./img/header/druplicon.svg' alt=""></img>
        <div className="navigate">
            <div className="container">
                <div className="navigate__body">
                    <div className="navigate__logo">
                        <a href="#"><img src="./img/header/Logo.svg" alt="logo" class="image"/></a>
                    </div>
                    <div className="navigate__burger" ref={burger} onClick={()=>{clickBurger()}}>
                        <span></span>
                    </div>
                    <nav className="navigate__menu" ref={navlist}>
                        <ul className="navigate__list">
                            <li className="menu-item">
                                <Link to='/' className="navigate__link" onClick={()=>{clickLink()}}>ПОДДЕРЖКА</Link>
                            </li>
                            <li className="menu-item dropdown">
                            <a className="navigate__link dropdown-toggle" href="">АДМИНИСТРИРОВАНИЕ</a><SlArrowDown className='arrow-icon'/>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="">МИГРАЦИЯ</a>
                                <a className="dropdown-item" href="">БЭКАПЫ</a>
                                <a className="dropdown-item" href="">АУДИТ БЕЗОПАСНОСТИ</a>
                                <a className="dropdown-item" href="">ОПТИМИЗАЦИЯ СКОРОСТИ</a>
                                <a className="dropdown-item" href="">ПЕРЕЕЗД НА HTTPS</a>
                            </div>
                            </li>
                            <li className="menu-item"><a class="navigate__link" href="">РЕКЛАМА</a></li>
                            <li className="menu-item dropdown">
                            <Link to='/about' className="navigate__link dropdown-toggle" onClick={()=>{clickLink()}}>О НАС  <SlArrowDown className='arrow-icon'/>   </Link>
                            <div className="dropdown-menu dropdown-menu-second">
                                <a  className="dropdown-item" href="">КОМАНДА</a>
                                <a className="dropdown-item" href="">DRUPALGIVE</a>
                                <a className="dropdown-item" href="">БЛОГ</a>
                            </div>
                          
                            </li>
                            <li className="menu-item"><a class="navigate__link" href="">ПРОЕКТЫ</a></li>
                            <li className="menu-item"><a class="navigate__link" href="">КОНТАКТЫ</a></li>
                              
                        </ul>
                    </nav>
                    
                </div>  
    
    
    
            </div>
        </div>
        <div className="container ">  
            <div className="header__body">
                <div className="header__text1">
                    <div className="header__title title"> Поддержка сайтов на Drupal</div>
                    <p>Сопровождение и поддержка сайтов на CMS Drupal любых версий и запущенности</p>
                    <a href="#rates" className="tariff">тарифы</a>
                    
                </div>
                <div className="header__text2">
                    <div className="item__row">
                        <div className="header__item">
                            <div className="item__title title-big">#1 <img src='./img/header/cup.svg' className="cup-item" alt=""></img>
                            </div>
                            <div className="item__text">Drupal-разработчик в России по версии Рейтинга Рунета</div>
                        </div>
                        <div className="header__item">
                            <div className="item__title">3+</div>
                            <div className="item__text">средний опыт специалистов более
                                3 лет</div>
                        </div>
                        <div className="header__item">
                        <div className="item__title">14</div>
                        <div className="item__text">лет опыта в сфере Drupal</div>
                        </div>
                    </div>
                    <div className="item__row">
                        <div className="header__item">
                            <div className="item__title">200+</div>
                            <div className="item__text">модулей и тем
                                в формате DrupalGive</div>
                        </div>
                        <div className="header__item">
                            <div className="item__title">35 000</div>
                            <div className="item__text">часов поддержки сайтов на Drupal</div>
                        </div>
                        <div className="header__item">
                            <div className="item__title">200+</div>
                            <div className="item__text">Проектов на поддержке</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
     );
}
 
export default Header;