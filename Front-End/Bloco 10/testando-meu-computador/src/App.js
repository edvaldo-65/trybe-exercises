
import React from 'react';
import About from './About';
import Image from './ fixation-exercises-10-2';
// function App() {
//   return <About/>
// }

class App extends React.Component {
  render() {
    return (
  <>
  <About />
  <Image src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt="Cute cat staring"/>
  </>    
    )
  }
}

export default App;
