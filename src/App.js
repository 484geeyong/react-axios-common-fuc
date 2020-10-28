import './App.css';
import axios from 'axios';
import React ,{Component} from 'react';
import * as getData from './getData';

class App extends Component{
  componentDidMount(){
    {getData.getData('dummy/get-my-library-list.json')}
    // {getData('dummy/get-my-library-list.json')}
  }
  render(){
    return(
      <div>
          
      </div>
    )
  }
}
export default App;
document.getElementById("root");
