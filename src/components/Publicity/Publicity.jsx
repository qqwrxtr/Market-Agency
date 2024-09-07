import ButtonStyled from "components/Button_Styled/ButtonStyled";
import publicity__ilustration from "assets/img/publicity.svg";

const Publicity = () => {
  return (
    <div
      className="container mt-36 p-14 flex items-center justify-between relative"
      style={{ backgroundColor: "var(--gray)", borderRadius: "45px" }}
    >
      <div
        className="text__publicity flex flex-col gap-7"
        style={{ maxWidth: "580px" }}
      >
        <div className="publicity__title">
          <p className="text-3xl font-semibold">Let’s make things happen</p>
        </div>
        <div className="publicity__subtitle">
          <p className="text-p">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
        </div>
        <div className="publicity__button">
          <ButtonStyled text="Get your free proposal" />
        </div>
      </div>
      <div className="ilustation__publicity">
        <img
          src={publicity__ilustration}
          className="absolute right-0 bottom-0"
          alt="publicity__ilustration"
          style={{ width: "auto", height: "110%" }}
        />
      </div>
    </div>
  );
};

export default Publicity;
