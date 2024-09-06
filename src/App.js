import Banner from "components/Banner/Banner";
import CaseStud from "components/CaseStud/CaseStud";
import Header from "components/Header/Header";
import Publicity from "components/Publicity/Publicity";
import Services from "components/Services/Services";
import ShowCompany from "components/ShowCompany/ShowCompany";
import WorkProcess from "components/WorkProcess/WorkProcess";

function App(props) {
  return (
    <div className="bg-white 2xl:px-44 xl:px-24 sm:px-8">
      <header className="w-full flex justify-center">
        <Header />
      </header>
      <main className="w-full flex justify-center flex-col">
         <Banner/>
         <ShowCompany/>
         <Services cardInfo = {props.cardInfo}/>
         <Publicity/>
         <CaseStud/>
         <WorkProcess/>
      </main>
    </div>
  );
}

export default App;
