import React from "react"
import Profil from './profil/Profil'
import photo from './myphoto.jpg'

import './App.css';

class App extends React.Component {
  state={
  myprofil:{
    FullName:" Basma HAMDI",
    Profession:"Mechanical engineer and web developer",
    Email:"bsm.hamdi09@gmail.com",
    Phone:"0021624395546",
    imgSrc:photo,
      },
    toggle:false,
    count:0
    }

    handleClick=()=>{
      this.setState({toggle:!this.state.toggle})
    }
      
    componentDidMount(){
    setInterval(()=>{
      this.setState({count:this.state.count+1})
    
    },1000);
    
    }
    render(){
  
  
      return (
        <div>
          
          <h2 className='conteur'> Time since the component has mounted: {this.state.count} </h2>
          
          <Profil myprofil={this.state} handleClick={this.handleClick} />
          
      </div>)
    }
}

export default App;

