import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import ProfessionalExperience from "./components/ProfessionalExperience";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1>Cv Application</h1>
      <GeneralInfo />
      <Education />
      <ProfessionalExperience />
    </>
  );
}

export default App;
