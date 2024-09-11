import Title_Block from "components/Title_Block/Title_Block";
import right_arrow from "assets/img/next.png";
import "./CaseStud.css"

const CaseStud = (props) => {
  return (
    <>
      <div className="container pt-20 md:pt-36" id="case__studies">
        <Title_Block
          title="Case Studies"
          subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
      </div>
      <div
        className="container rounded-3xl p-4 mt-5 md:mt-20 sm:p-10 "
        style={{ backgroundColor: "var(--dark)" }}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-10 auto-rows-fr place-items-center ${
            props.history.length % 2 !== 0 ? 'md:grid-cols-1' : ''
          }`}
        >
          {Object.values(props.history).map((item, index) => (
            <div
              className="text__block__cases flex flex-col justify-between p-6 rounded-lg text-white"
              key={item.id}
              style={{
                gridColumn: index === props.history.length - 1 ? "span 3" : ""
              }}
            >
              <p className="mb-4 text__cases">{item.text}</p>
              <a
                href="#"
                className="flex items-center hover:underline"
                style={{ color: "var(--green)" }}
              >
                Learn more{" "}
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                  <img src={right_arrow} alt="" className="w-4 h-4" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStud;
