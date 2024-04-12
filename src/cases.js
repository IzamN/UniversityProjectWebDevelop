import { useRef } from "react";

const Cases = () => {
    const novisible=useRef(null);
    const cases=useRef(null);
    const ScrollToCases=()=>{
        window.scrollTo({
            top:cases.current.offsetTop,
        })
    }
    
    const clickCaseBtn=(e)=>{
        if (e.target.innerText==='Все кейсы') {
            e.target.innerText="Часть кейсов"
            novisible.current.classList.remove('none');
            }
            else {
                e.target.innerText="Все кейсы"
                novisible.current.classList.add('none');
                ScrollToCases()
            }
        
    }        
    
    return ( 
        <section className="cases" id='cases' ref={cases}>
        <div className="container">
            <div className="сases__title title ">Последние кейсы</div>
            <div className="cases__wrapper">
            <div className="cases__row">
                <div className="item__cases case-type1">
                    <div className="img__case"><img src="./img/cases/img1.png" alt="img1"/></div>
                    <div className="case__data">
                        <div className="title__case"><a href="#">Настройка выгрузки YML для Яндекс.Маркета</a> </div>
                        <div className="date__case">22.04.2019</div>
                        <div className="text-case">Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.</div>
                    </div>
                </div>
                
                <div className="item__cases case-type2">
                    <div className="img__case"><img src="./img/cases/img2.png" alt=""/></div>
                    <div className="title__case"><a href="#">Настройка выгрузки YML для Яндекс.Маркета</a> </div>
                </div>
            </div>
            <div className="novisible none" ref={novisible}>
                <div className="cases__row  " >
                    <div className="item__cases case-type3">
                        <div className="img__case"> <img src="./img/cases/img3.png" alt="img3"/></div>
                        <div className="case__data">
                            <div className="title__case"><a href="#">Настройка выгрузки YML для Яндекс.Маркета</a> </div>
                            <div className="date__case">22.04.2019</div>
                        </div>
                    </div>
                    <div className="item__cases case-type3">
                        <div className="img__case"> <img src="./img/cases/img4.png" alt="img3"/></div>
                        <div className="case__data">
                            <div className="title__case"><a href="#">Настройка выгрузки YML для Яндекс.Маркета</a> </div>
                            <div className="date__case">22.04.2019</div>
                            {/* <!-- <div className="text-case"></div> --> */}
                        </div>
                    </div>
                    <div className="item__cases case-type1">
                        <div className="img__case"><img src="./img/cases/img5.png" alt="img1"/></div>
                        <div className="case__data">
                            <div className="title__case"><a href="#">Настройка выгрузки YML для Яндекс.Маркета</a> </div>
                            <div className="date__case">22.04.2019</div>
                            <div className="text-case">Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.</div>
                        </div>
                    </div>
                </div>
                <div className="cases__row  "  >
                    <div className="item__cases case-type2 ">
                        <div className="img__case"><img src="./img/cases/img6.png" alt=""/></div>
                        <div className="title__case"><a href="#">Настройка выгрузки YML для Яндекс.Маркета</a> </div>
                    </div>
                    <div className="item__cases case-type3 ">
                        <div className="img__case"> <img src="./img/cases/img7.png" alt="img3"/></div>
                        <div className="case__data">
                            <div className="title__case"><a href="#">Настройка выгрузки YML для Яндекс.Маркета</a> </div>
                            <div className="date__case">22.04.2019</div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
            <button type="button" className=" btn btn-cases"  onClick={(e)=>{clickCaseBtn(e)}}>Все кейсы</button>
        
        </div>
        
    </section>
     );
}
 
export default Cases;