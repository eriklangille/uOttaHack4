import React from 'react'
import './App.scss';
import Header from './components/Header';
import Profile from './components/Profile';
import ProjectList from './components/ProjectList';

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
    </div>
  );
}

export default App;
