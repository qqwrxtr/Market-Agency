import ButtonStyled from "components/Button_Styled/ButtonStyled";

const Publicity = () => {
  return (
    <div
      className="container mt-36 p-14 flex items-center justify-center"
      style={{ backgroundColor: "var(--gray)", borderRadius: "45px" }}
    >
      <div className="text__publicity flex flex-col gap-7 justify-center text-center">
        <div className="publicity__title">
          <p className="text-5xl font-semibold">Let’s make things happen</p>
        </div>
        <div className="publicity__subtitle">
          <p className="publicity__subtitle__p text-xl">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
        </div>
        <div className="publicity__button">
          <ButtonStyled text="Get your free proposal" />
        </div>
      </div>
    </div>
  );
};

export default Publicity;
