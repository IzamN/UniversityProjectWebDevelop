import Slider from "react-slick";
const Sliders = () => {
    let settings1={
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
    }
    let settings2={
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]

    }
    return ( 
        <section className="ClientsSliders">
        <div className="container">
            <div className="ClientsSliders_heading">
                <div className="ClientsSliders_title title">С нами работают</div>
                <div className="ClientsSliders_text text">Десятки компаний доверяют нам самое ценное, что у них есть в интернете - свои сайты.
                    Мы делаем всё, чтобы наше сотрудничество было долгим.
                </div>
            </div>
        </div>
        <div className="Clients-sliders">
                   <Slider className="Clients-slider"  {...settings1}> 
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/gasprom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/kubsu.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/rusatom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/vtb.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/gasprom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/kubsu.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/rusatom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/vtb.png"/> </div>
                </div>
                </Slider>
                <Slider {...settings2} className="Clients-slider Cslider2">
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/rusatom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/gasprom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/vtb.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/kubsu.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/rusatom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/gasprom.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/vtb.png"/> </div>
                </div>
                <div className="cslider">
                    <div><img alt="" src="./img/reviews/kubsu.png"/> </div>
                </div>
            </Slider>
        </div>
    </section>
     );
}
 
export default Sliders;