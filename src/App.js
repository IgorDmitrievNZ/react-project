import React from 'react';
import './App.css';
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users/1"

class App extends React.Component {

  constructor(props) {
    super(props)

    axios.get(baseUrl).then((server_response) => {
      console.log(server_response.data.data.avatar);
      this.setState({ picture: server_response.data.data.avatar })
    })

    this.state = {
      picture: ""
    }
    //All custom functions binds will be here
  }

  render() {
    return (

      <div>
        <header><h1>HEADER</h1></header>
        <img className="avatar_img" src={this.state.picture} />
      </div>)
  }
}

export default App;
