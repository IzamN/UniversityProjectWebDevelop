
import { useRef, React, useState} from 'react'
import Slider from 'react-slick';
const Reviews = () => {
    const slider=useRef(null);
    const prev=useRef(null);
    const next=useRef(null);
    const [curr, setCurr]=useState(1);
    const all=4;
    const changeCurr=(value)=>{
        if (value==1){
            if (curr+1>all) setCurr(1)
            else setCurr(curr+1)  
        }
        else {
            if (curr-1==0) setCurr(all);
            else setCurr(curr-1)
        }
    }
        let settings={
            infinite: true,
            speed: 300,
            swipe: false,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows:false,
        }
  
    return ( 
        <section className="reviews reviewsFULL" id="reviews">
        <div className="container">
            <div className="reviews__heading">
                <div className="reviews_title title">Отзывы</div>
            </div>
            <div className="reviews_double">
                <div className="reviews_block">
                    <Slider className="SliderR" ref={slider} {...settings}>
                        <div className="slide">
                            <img alt="gasprom" src="./img/reviews/gasprom.png"/>
                            <div className="review_text">
                                Долгие поиски единственного и неповторимого мастера на многострадальный сайт&nbsp;www.cielparfum.com,
                                который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть,
                                привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не
                                проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не
                                работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими
                                существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и
                                доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф).
                                Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает
                                с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант.
                                Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта
                                CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго!Спасибо!!!
                            </div>
                            <div className="review_by">
                            С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»
                            </div>
                        </div>
                        <div className="slide">
                            <img alt="" src="./img/reviews/kubsu.png"/>
                            <div className="review_text">
                                Долгие поиски единственного и неповторимого мастера на многострадальный сайт&nbsp;www.cielparfum.com,
                                который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть,
                                привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не
                                проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не
                                работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими
                                существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и
                                доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф).
                                Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает
                                с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант.
                                Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта
                                CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго!Спасибо!!!
                            </div>
                            <div className="review_by">
                            С уважением, Виктория Изам - руководитель Отдела веб-проектов компании «ФэКэТэ и ПэМэИ»
                            </div>
                        </div>
                        <div className="slide">
                            <img alt="" src="./img/reviews/rusatom.png"/>
                            <div className="review_text">
                                Долгие поиски единственного и неповторимого мастера на многострадальный сайт&nbsp;www.cielparfum.com,
                                который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть,
                                привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не
                                проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не
                                работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими
                                существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и
                                доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф).
                                Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает
                                с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант.
                                Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта
                                CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго!Спасибо!!!
                            </div>
                            <div className="review_by">
                            С уважением,  руководство компании Estee
                            </div>
                        </div>
                        <div className="slide">
                            <img alt="" src="./img/reviews/vtb.png"/>
                            <div className="review_text">
                                Долгие поиски единственного и неповторимого мастера на многострадальный сайт&nbsp;www.cielparfum.com,
                                который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть,
                                привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не
                                проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не
                                работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими
                                существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и
                                доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф).
                                Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает
                                с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант.
                                Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта
                                CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго!Спасибо!!!
                            </div>
                            <div className="review_by">
                            С уважением, руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм» - Свет Светович
                            </div>
                        </div>
                        </Slider>
                    <div className="review-arrow-block">
                        <button id="review-prev" ref={prev} onClick={() => {slider?.current?.slickPrev();changeCurr(2); console.log('click prev')}}></button>
                        <div className="review-display">
                            <span id="review-number">0{curr}</span> / 0{all}
                        </div>
                        <button id="review-next" ref={next} onClick={() =>{ slider?.current?.slickNext();changeCurr(1);console.log('click next')}}></button>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Reviews;