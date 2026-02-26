import { Component } from "react";
import "./App.css";

// 3-23
class App extends Component {
  input = "";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display4">React</h1>
        <div className="container">
          <p className="subtitle">draw rectangle</p>
          <Message title="Children!">aaa. aaa. aaa.</Message>
        </div>
      </div>
    );
  }
}

class Message extends Component {
  li = {
    fontSize: "16pt",
    fontWeight: "bold",
    color: "#00f",
  };
  render() {
    let content = this.props.children;
    let arr = content.split(". ");
    let arr2 = [];
    let data = this.props.data;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim() != "") {
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value, key) => (
      <li className="list-group-item" style={this.li} key={key}>
        {key + 1}. {value} .
      </li>
    ));
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol className="list-group">{list}</ol>
      </div>
    );
  }
}

// class Item extends Component {
//   itm = {
//     textDecoration: "underline",
//     textDecorationColor: "#ddf",
//   };

//   num = {
//     color: "red",
//   };

//   render() {
//     return (
//       <p style={this.item}>
//         <span style={this.num}>[{this.props.number}]&nbsp;</span>
//         {this.props.value}
//       </p>
//     );
//   }
// }

export default App;
