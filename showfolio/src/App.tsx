import React from 'react'
import './App.scss';
import Header from './components/Header';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';
import ProjectList from './components/ProjectList';
import ProjectPage from './components/ProjectPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:user" exact component={ProjectList} />
          <Route path="/:user/:project" exact component={ProjectPage} />
        </Switch>
      </Router>

      {/* <Header />
      <Header/>
      <Profile 
        Name="Scott Langille" 
        Description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
        Avatar={process.env.PUBLIC_URL + '/users/scottlangille/avatar.jpg'}
      />
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
