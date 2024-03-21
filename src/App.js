import { Component } from "react";
import "./App.css"

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
        images: [],
        DataisLoaded: false,
        SearchInput:"",
    };
  }
  
  getInput=event=>{
    this.setState({SearchInput: event.target.value})
  }


  // getImages=  async(event)=>{
  //   event.preventDefault();
  //   const options={
  //     method:"GET"
  //   }
  //   const response= await fetch(`${URL}?query=${
  //     searchInput.current.value
  //   }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`) 
  // }

  fetchData =() => {
    const accessKey = 'es37JP2CPHHDWaI8nYzXcKOuFVy_dmOBvE8JQXblu3Q';
    const { SearchInput} = this.state;
    const apiUrl = `https://api.unsplash.com/search/photos?query=${SearchInput}&client_id=${accessKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ images: data.results });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render(){
    const {SearchInput}=this.state
    return(
      <div className="container">
        <h1 className="heading">Search For The Image</h1>
        <div className="inputContainer">
          <input onChange={this.getInput} placeholder="Enter the value for Images" type="search" value={SearchInput} className="searchInput"/>
          <button onClick={this.fetchData}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
              
            />
            </button>
        </div>
        <p>{SearchInput}</p>
      </div>
    )
  }
}

export default App