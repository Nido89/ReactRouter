import React, { Component } from 'react';
import { 

  Link 

} from 'react-router-dom';

class About extends Component {


operation(){
  console.log('operation');



  this.props.history.push('/');


}
routetoContact(){

  this.props.history.push('/Contact/2643');


}

  render() {
    return (
      <div className="App">
        <h1>This is my About Page</h1>
        <button onClick={this.operation.bind(this)}>Operation</button>
        <button onClick={this.routetoContact.bind(this)}>Contact</button>

        <ul>
           <li><Link to='/Contact/2643'>2643</Link></li>
           <li><Link to='/Contact/2644'>2644</Link></li>
           <li><Link to='/Contact/2645'>2645</Link></li>


       </ul>

      </div>
    );
  }
}

export default About;
