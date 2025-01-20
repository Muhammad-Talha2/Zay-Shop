import Carousel from 'react-bootstrap/Carousel';
import pic from './images/banner_img_01.jpg'
import pic1 from './images/banner_img_02.jpg'
import pic2 from './images/banner_img_03.jpg'

function Slider() {
    return (
        <Carousel className='slides'>
            <Carousel.Item className='frst-slide'>
                <div className="main-child">

                    <div className="caption-write">
                        <h1 className='zy' > Zay eCommerce </h1>
                        <strong>Tiny and Perfect eCommerce Template</strong>
                        <p>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                    </div>
                    <div className="phhot-box">

                        <img className='imgs' src={pic} alt="First slide" />
                    </div>
                </div>
            </Carousel.Item>
            {/* ................... */}
            <Carousel.Item className='frst-slide'>
                <div className="main-child">

                    <div className="caption-write">
                        <h1 className='zy'> Zay eCommerce</h1>
                        <strong>Tiny and Perfect eCommerce Template</strong>
                        <p>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                    </div>
                    <div className="phhot-box">

                        <img className='imgs' src={pic1} alt="First slide" />
                    </div>
                </div>
            </Carousel.Item>
            {/* ............................ */}
            <Carousel.Item className='frst-slide'>
                <div className="main-child">

                    <div className="caption-write">
                        <h1 className='zy'>Proident occaecat</h1>
                        <strong>Aliquip ex ea commodo consequat</strong>
                        <p>You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</p>
                    </div>
                    <div className="phhot-box">

                        <img className='imgs' src={pic2} alt="First slide" />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;