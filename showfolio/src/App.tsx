import React from 'react'
import './App.scss';
import Header from './components/Header';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';
import ProjectList from './components/ProjectList';
import InfoBox from './components/InfoBox';
import ProjectPage from './components/ProjectPage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:user" exact component={ProfilePage} />
          <Route path="/:user/:project" component={ProjectPage} />
        </Switch>
      </Router>

      {/* <Header />
      <Header/>
      <Profile 
        Name="Scott Langille" 
        Description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
        Avatar={process.env.PUBLIC_URL + '/users/scottlangille/avatar.jpg'}
      />

      <ProjectList/>

      <InfoBox Title="Timeline">
        <p>Feb 5, 2021 – Feb 7, 2021</p>
      </InfoBox>
      <InfoBox Title="Team">
        <a href="#">Scott Langille</a>
        <p>UI/UX Designer</p>
        <a href="#">Erik Langille</a>
        <p>Full-Stack Developer</p>
      </InfoBox>
      <InfoBox Title="Links" Style="links">
      <p><a href="#">View on Website</a></p>
      <p><a href="#">View on GitHub</a></p>
      </InfoBox>
      <InfoBox Title="Tags" Style="tags">
        <div>
          <span>ReactJS</span>
          <span>Adobe XD</span>
        </div>
      </InfoBox>

      <ProjectCard 
        Name="uOttaHack4"
        Image={process.env.PUBLIC_URL + '/users/scottlangille/uOttahacks/image.png'}
        ShortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
        StartDate={new Date("2021-02-05 8:00")}
        EndDate={new Date("2021-02-07 8:00")}
        Tags={["ReactJS", "Adobe XD", "Node.js", "Express", "TypeScript"]}
      /> */}
      {/* <ProjectList/> */}
    </div>
  );
}

export default App;
