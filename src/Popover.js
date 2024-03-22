import { Component } from "react";

class Popover extends Component {
  state = {
    isVisible: false,
  };

  handleMouseEnter = () => {
    this.setState({ isVisible: true });
  };

  handleMouseLeave = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { isVisible } = this.state;
    const { text } = this.props;
    return (
      <div
        className="popover-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
        {isVisible && <div className="popover">{text}</div>}
      </div>
    );
  }
}

export default Popover;
