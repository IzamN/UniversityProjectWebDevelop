import {supportData} from './data'
const  Support = () => {
    const supportRender=()=>{
        return supportData.map((item)=>{
            return <div className="card__wrapper" key={item.id}>
            <div className="card__number">{item.number}</div>
            <div className="card__title title">{item.title}</div>
            <div className="card__text">{item.text}</div>
                <div className="card__img"><img src={`./img/support/support${item.id}.svg`} alt=""/></div>
        </div>
        })
    }
    return ( 
        <section className="support" id='support'>

            <div className="wrapper__support">
            <img className="laptop" src='./img/support/laptop.svg' alt=""/>
            <div className="container">
            
            <div className="support__title title">Поддержка от Drupal-coder</div>
            
            <div className="support__cards">
                <div className="supports__row">
                    {supportRender()}
                    </div>
            </div>
            <div className="support__expert">
                <img className="background__support" src="./img/header/druplicon.svg" alt=""/> 
                <div className="expert__info">
                    <div className="expert__title title">Экспертиза в Drupal, опыт 14 лет!</div>
                    <div className="expert__items">
                        <div className="item__expert">Только системный подход – контроль версий, резервирование
                            и тестирование!</div>
                        <div className="item__expert">Только Drupal сайты,
                            не берем на поддержку сайты на других CMS!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
     );
}
 
export default Support ;