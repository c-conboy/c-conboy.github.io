import TypeWriter from "typewriter-effect";
import bg from './assets/bg2.jpg';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bg} className="App-logo" alt="logo" />
       <h1 className = "name" >
          Carter Conboy
       </h1>
       <TypeWriter onInit = {(typewriter) => {

         
        var passions = [" learning", " developing software", " roleplaying games", "problem solving", " math", " cooking", "technology"];

         typewriter
         .changeDelay(65)
         .changeDeleteSpeed(30)
         .typeString("Hi, ")
         .pauseFor(500)
         .typeString("I'm a Computer Engineering student at Queen's University")
         .pauseFor(2000)
         .deleteAll()
         .typeString("I'm passionate about ").start();
         
         for(var i = 0; i<  passions.length; i++){
          typewriter.typeString(passions[i]).pauseFor(1000).deleteChars(passions[i].length).pauseFor(200);
         }

         typewriter
         .pauseFor(200)
         .deleteAll()
         .typeString("Check out what I've been working on")
         .start();

         
       }}/>
       <div className = "icons"> 
              <a href = "https://github.com/c-conboy"  target="_blank" ><GitHubIcon className = "linkButton"></GitHubIcon></a>
              <a href = "https://www.linkedin.com/in/carter-conboy/"  target="_blank" ><LinkedInIcon className = "linkButton"></LinkedInIcon></a> 
              <a href = "https://linktr.ee/carterConboy"  target="_blank" ><LinkIcon className = "linkButton"></LinkIcon></a> 
       </div>

        <div className ="emailCont" ><a className = "email" href="mailto:carter.conboy@queensu.ca">Get in touch</a></div>
       
      
      </header>
    </div>
  );
}

export default App;
