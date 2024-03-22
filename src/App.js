import { Component } from "react";
import "./App.css";
import Popover from "./Popover";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: false,
      SearchInput: "",
    };
  }

  getInput = (event) => {
    this.setState({ SearchInput: event.target.value });
  };

  fetchData = () => {
    const accessKey = "es37JP2CPHHDWaI8nYzXcKOuFVy_dmOBvE8JQXblu3Q";
    this.setState({ isLoading: true });
    const { SearchInput } = this.state;
    const apiUrl = `https://api.unsplash.com/search/photos?query=${SearchInput}&client_id=${accessKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ images: data.results });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    const { SearchInput, images, isLoading } = this.state;
    return (
      <div className="container">
        <h1 className="heading">Search For The Image</h1>
        <div className="inputContainer">
          <input
            onChange={this.getInput}
            placeholder="Enter the value for Images"
            type="search"
            value={SearchInput}
            className="searchInput"
          />
          <button onClick={this.fetchData}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </button>
        </div>
        {isLoading ? (
          <p>Loading.....</p>
        ) : (
          <div className="image-container">
            {images.map((image) => (
              <Popover text={image.alt_description}>
                <img
                  key={image.id}
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="image"
                />
              </Popover>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;