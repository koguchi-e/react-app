import { Component } from "react";
import "./App.css";

// 3-23
class App extends Component {
  data = ["This is list sample.", "test list", "converting list to array"];

  constructor(props) {
    super(props);
    this.state = {
      list: this.data,
    };
    // this.doAction = this.doAction.bind(this);
  }

  // doAction(e) {
  //   let x = e.pageX;
  //   let y = e.pageY;
  //   this.data.push({ x: x, y: y });
  //   this.setState({
  //     list: this.data,
  //   });
  // }

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display4">React</h1>
        <div className="container">
          <p className="subtitle">draw rectangle</p>
          <List title="sample list" data={this.data}></List>
        </div>
      </div>
    );
  }
}

class List extends Component {
  number = 1;
  render() {
    let data = this.props.data;
    return (
      <div>
        <p className="h5 text-center">{this.props.title}</p>
        <ul className="list-group">
          {data.map((item, key) => (
            <li className="lis-group-item" key={key}>
              <Item number={key + 1} value={item}></Item>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Item extends Component {
  itm = {
    fontSize: "16pt",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf",
  };

  num = {
    fontWeight: "bold",
    color: "red",
  };

  render() {
    return (
      <p style={this.item}>
        <span style={this.num}>[{this.props.number}]&nbsp;</span>
        {this.props.value}
      </p>
    );
  }
}

export default App;
