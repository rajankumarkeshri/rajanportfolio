import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Intro from './components/intro/Intro';
import Skill from './skill/Skill';
import Works from './components/works/Works';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Skill></Skill>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
