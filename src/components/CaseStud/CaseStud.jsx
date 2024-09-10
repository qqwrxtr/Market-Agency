import Title_Block from "components/Title_Block/Title_Block";
import right_arrow from "assets/img/next.png"

const CaseStud = (props) => {
  return (
    <>
      <div className="container pt-36">
        <Title_Block
          title="Case Studies"
          subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
      </div>
      <div className="container rounded-3xl p-10 mt-20" style={{backgroundColor:"var(--dark)"}}>
        <div className="grid md:grid-cols-3 gap-10">
          {Object.values(props.history).map((item) => (
            <div
              className="text__block__cases flex flex-col justify-between p-6 rounded-lg text-white"
              key={item.id}
            >
              <p className="mb-4">{item.text}</p>
              <a
                href="#"
                className="flex items-center hover:underline"
                style={{color:"var(--green)"}}
              >
                Learn more{" "}
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                  <img src={right_arrow} alt="" className="w-4 h-4"/>
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
