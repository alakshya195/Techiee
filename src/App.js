import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Services from "./Components/Services";


import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/Home.scss";
import "./Styles/footer.scss";
import "./Styles/contacts.scss";
import "./Styles/services.scss";
import "./Styles/mediaquery.scss";



function App() {
  return (

    <Router>
      <Header/>
      <Routes>

        <Route path="/"  element={<Home/>}/>
        <Route path="/contact"  element={<Contacts/>}/>
        <Route path="/services"  element={<Services/>}/>
  

      </Routes>
      <Footer/>
    </Router>
  
);
}

export default App;
