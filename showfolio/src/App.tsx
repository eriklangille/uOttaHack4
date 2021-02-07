import React from 'react'
import './App.scss';
import Header from './components/Header';
import Profile from './components/Profile';
import ProjectList from './components/ProjectList';
import InfoBox from './components/InfoBox';

function App() {
  return (
    <div className="App">
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

    </div>
  );
}

export default App;
