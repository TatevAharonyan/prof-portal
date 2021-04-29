import Header from './Main/Header/Index';
import './Style/Header.css';
import './Style/App.css';
import './Style/Section1.css';
import './Style/Section234.css';
import Footer from './Main/Footer';
import Section1 from './Main/Section1/Index';
import Section2 from './Main/Section2/Index';
import Section3 from './Main/Section3/Index';
import Section4 from './Main/Section4/Index';


function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Footer/>

    </div>
  );
}

export default App;

