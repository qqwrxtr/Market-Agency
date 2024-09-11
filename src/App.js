import Banner from "components/Banner/Banner";
import CaseStud from "components/CaseStud/CaseStud";
import Header from "components/Header/Header";
import Publicity from "components/Publicity/Publicity";
import Services from "components/Services/Services";
import ShowCompany from "components/ShowCompany/ShowCompany";
import WorkProcess from "components/WorkProcess/WorkProcess";
import Testimonials from "components/Testimonials/Testimonials"
import Footer from "components/Footer/Footer";

function App(props) {
  return (
    <div className="bg-white 2xl:px-44 xl:px-24 sm:px-8 px-2 scroll-smooth">
      <header className="w-full flex justify-center">
        <Header />
      </header>
      <main className="w-full flex justify-center flex-col">
         <Banner/>
         <ShowCompany/>
         <Services cardInfo = {props.cardInfo}/>
         <Publicity/>
         <CaseStud history = {props.history} />
         <WorkProcess steps = {props.steps}/>
         <Testimonials testimonials={props.testimonials}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
