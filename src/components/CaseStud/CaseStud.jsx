import Title_Block from "components/Title_Block/Title_Block";
import right_arrow from "assets/img/next.png"

const history = {
  history1: {
    id: 1,
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  history2: {
    id: 2,
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
  },
  history3: {
    id: 3,
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
};

const CaseStud = () => {
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
          {Object.values(history).map((item) => (
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
