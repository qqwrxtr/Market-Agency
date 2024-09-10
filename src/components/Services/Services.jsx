import Title_Block from "components/Title_Block/Title_Block.jsx";
import "./Services.css";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = (props) => {
  return (
    <>
      <div className="container pt-20 md:pt-36 w-full ">
        <Title_Block title = "Services" subtitle = "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
      </div>
      <div className="container pt-5 md:pt-20">
        <div className="row flex flex-wrap justify-center gap-10 ">
            <ServicesCard cardInfo = {props.cardInfo}/>
        </div>
      </div>
    </>
  );
};

export default Services;
