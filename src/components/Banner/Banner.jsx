import ButtonStyled from "components/Button_Styled/ButtonStyled";
import "./Banner.css"
import banner__ilustration from "assets/img/Illustration.svg"

const Banner = () => {
    return ( 
        <div className="container pt-16">
            <div className="row flex md:justify-between md:items-center justify-center">
                <div className="banner__text">
                    <div className="banner__title">
                        <p className="text-6xl leading-tight">Navigating the digital landscape for success</p>
                    </div>
                    <div className="banner__ilustration__phone md:hidden">
                        <img src={banner__ilustration} alt="banner__ilustration__phone" />
                    </div>
                    <div className="banner__subtitle pt-9">
                        <p className="text-p leading-8">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    </div>
                    <div className="banner__button pt-9">
                        <ButtonStyled text="Book a consultation" />
                    </div>
                </div>
                <div className="banner__ilustration hidden md:block">
                    <img src={banner__ilustration} alt="banner__ilustration"/>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;