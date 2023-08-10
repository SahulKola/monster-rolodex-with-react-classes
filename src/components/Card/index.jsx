import { Component } from "react";
import "./Card.component.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img
          src={`https://robohash.org/${this.props.monster.id}?set=set2`}
          alt="Monster"
        />
        <h3 className="title">{this.props.monster.name}</h3>
        <p className="email">{this.props.monster.email}</p>
      </div>
    );
  }
}

export default Card;
