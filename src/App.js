import React, {Component} from 'react'
import NavBar from '../src/components/Navbar/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = null
  }

  render() {
    return (
      <>
      <div>Web store</div>
      <NavBar/>
      </>
    )
  }
}

export default App