import React, { Component } from 'react';

class Contact extends Component {




  render() {
      let users = {
          2643: {
name: 'Jalal' ,
cell: 'xyz'


          },
          2644: {
            name: 'shoaib' ,
            cell: 'abc'
          },
          2645: {
            name: 'hamza' ,
            cell: 'efg'
          },






      }
      let requiredUser = users[this.props.match.params.id]



    return (
      <div className="App">
        <h1>Contact Me</h1>

        User Name :{requiredUser.name}
        User Cell :{requiredUser.cell}
        
      </div>
    );
  }
}

export default Contact;
