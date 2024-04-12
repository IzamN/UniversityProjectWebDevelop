import { servicesData } from "./data";
const services = () => {
    const servicesRender=()=>{
        return servicesData.map((item)=>{
            return <div className="services__item" key={item.id}>
            <div className="item__img">
                <div className="img__wrapper">
                    <img src={`./img/services/${item.id}.svg`} alt="img"></img>
                </div>
                
            </div>
            <div className="item__text">{item.discription}</div>
        </div>
        })
    }
    return ( 
        <section className="services">
        <div className="container">
            <div className="services-heading">
                <div className="title services-title">13  лет совершенствуем компетенции в Drupal поддержке!</div>
                <div className="services__text">Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн</div>
            </div>  
            <div className="services__cards">
                {servicesRender()}
            </div>
        </div>
    </section>
     );
}
 
export default services;