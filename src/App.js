import { Component } from "react";
import "./App.css"


class App extends Component{
  state={
    SearchInput:"",
  }

  getInput=event=>{
    this.setState({SearchInput: event.target.value})
  }

  getImages=event=>{
    event.preventDefault();
  
  }


  render(){
    const {SearchInput}=this.state
    return(
      <div className="container">
        <h1 className="heading">Search For The Image</h1>
        <div className="inputContainer">
          <input onChange={this.getInput} placeholder="Enter the value for Images" type="search" value={SearchInput} className="searchInput"/>
          <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
              onClick={this.getImages}
            />
        </div>
        <p>{SearchInput}</p>
      </div>
    )
  }
}

export default App