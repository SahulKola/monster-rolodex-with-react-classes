import React, { Component } from "react";
import CardList from "./components/CardList";
import "./App.css";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        return this.setState({ ...this.state, monsters: data });
      });
  }
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <div className="container">
          <h1 className="heading">Monster Rolodex</h1>
          <Search
            handleChange={e =>
              this.setState({ ...this.state, searchField: e.target.value })
            }
          />
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
