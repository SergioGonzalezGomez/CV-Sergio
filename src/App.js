import './App.css';
import { useState } from 'react';
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import Footer from "./components/Footer/Footer";
import { CV } from "./CV/CV"

const { hero, education, experience, more, languages, habilities, awards } = CV;

function App() {
  const [showEducation, setShowEducation] = useState("education");
  return (
    <div className="App">

      <Hero hero={hero} />
      {/*  <About hero={hero}/> */}


      <button className="custom-btn btn-4" onClick={() => setShowEducation("education")}>
        EDUCACIÓN
      </button>
      <button className="custom-btn btn-4" onClick={() => setShowEducation("experience")}>
        EXPERIENCIA
      </button>
      <button className="custom-btn btn-4" onClick={() => setShowEducation("more")}>
        COMPETENCIAS
      </button>

      <div>
        {showEducation === "education" ? (
        <Education education={education} />
        ) : showEducation === "experience" ? (
        <Experience experience={experience} />
        ) : (
        <More
          languages={languages}
          habilities={habilities}
          awards={awards}
        />
        )}

      </div>
          <Footer />
    </div>


  );
}

export default App;


/* {if(showEducation == education) {
          (<Education education={education} />)
        } else if (showEducation == experience) {
          (<Experience experience={experience} />)
        }else if (showEducation == more) {
          <More
            languages={languages}
            habilities={habilities}
            awards={awards}
          />
        }} */