import './App.css';

import Rates from './rates';
import Services from './services';
import Support from './support'
import Cases from './cases'
import Team from './team'
import Contacts from './contacts';
import Reviews from './reviews';
import Sliders from './sliders';
const MainPage = () => {
    return ( 
            <div className="mainPage" >
                <Services/>
                <Support/>
                <Rates/>
                <Cases/>
                <Team/>
                <Reviews/>
                <Sliders/>
                <Contacts/>
            </div>
            );
}
 
export default MainPage;