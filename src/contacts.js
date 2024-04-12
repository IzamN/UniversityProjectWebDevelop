import Form from './form'
import { FiPhone, FiMail } from 'react-icons/fi';
import {BiLogoTelegram,BiLogoFacebook} from 'react-icons/bi';
import {AiFillYoutube} from 'react-icons/ai';
import {SlSocialVkontakte} from 'react-icons/sl';
const Contacts = () => {
    return (  
        <div className="bg-black" id='contacts'>
        <img className="bg__icon-center" src="./img/footer/iconFooter.png" alt=""/>
        <img className="bg__icon-bottom" src="./img/footer/iconFooter.png" alt=""/>
    <section className="web-form">
        <div className="container">
            <div className="web-form__wrapper">
                <div  className="contacts">
                    <div className="contacts__title title">Оставить заявку на поддержку сайта</div>
                    <div className="contacts__text">Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!</div>
                    <div className='contacts__wrapper'>
                        <div className="contacts__phone"><FiPhone className='phone'/> 8 800 222-26-73</div>
                        <div className="contacts__email">
                            <a href='#'>
                                <FiMail className='email'/> 
                                info@drupal-coder.ru
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <Form/>
                </div>
            </div>
        </div>
    </section>
    <section className="footer">
        <div className="container">
            <div className="icons">
                <a href='#'><BiLogoFacebook className='facebook icon__contacts'/></a>
                <a href='#'><SlSocialVkontakte className='vk icon__contacts'/></a>
                <a href='#'><BiLogoTelegram className='telega icon__contacts'/></a>
                <a href='#'><AiFillYoutube className='youtoube icon__contacts'/></a>
            </div>
            Проект ООО «Инитлаб», Краснодар, Россия. <br />
            Drupal является зарегистрированной торговой маркой Dries Buytaert.
        </div>
    </section>
    </div>

    );
}
 
export default Contacts;