import { Component } from "react";
import Card from "../Card";
import "./CardList.component.css";
class CardList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cardlist">
        {this.props.monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}
export default CardList;
