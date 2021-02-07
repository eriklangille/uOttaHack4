import React from 'react'
import './App.scss';
import Header from './components/Header';
import Profile from './components/Profile';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Header />
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
        Teammates={[
                    {
                    Name: "Scott Langille",
                    Role: "UI/UX Designer",
                    Url: "#"
                    },
                    {
                    Name: "Erik Langille",
                    Role: "Full-Stack Developer",
                    Url: "#"
                    }
                  ]}
      />
    </div>
  );
}

export default App;
