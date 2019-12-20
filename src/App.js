import React from "react";
import "./App.css";
// import contact from "./data";
import List from "./List";
import AddContact from "./addContact";

const contactList = [
  {
    id: Math.random(),
    name: "foulen",
    phone: "002165896358",
    email: "foulen@gmail.com",
    isFamily: true
  },
  {
    id: Math.random(),
    name: "foulen",
    phone: "002165896358",
    email: "foulen@gmail.com",
    isFamily: true
  },
  {
    id: Math.random(),
    name: "foulen",
    phone: "002165896358",
    email: "foulen@gmail.com",
    isFamily: false
  },
  {
    id: Math.random(),
    name: "foulen",
    phone: "002165896358",
    email: "foulen@gmail.com",
    isFamily: true
  },
  {
    id: Math.random(),
    name: "foulen",
    phone: "002165896358",
    email: "foulen@gmail.com",
    isFamily: false
  },
  {
    id: Math.random(),
    name: "foulen",
    phone: "002165896358",
    email: "foulen@gmail.com",
    isFamily: false
  }
];

class App extends React.Component {
  state = {
    contact: contactList
  };
  add = x => {
    this.setState(
      {
        contact: this.state.contact.concat({ id: Math.random(), ...x })
      },
      console.log(this.state.contact)
    );
  };
  render() {
    return (
      <div className="App">
        <List contacts={this.state.contact} />

        <AddContact addNewContact={this.add} p={"proptest"} p1={"prop2"} />
      </div>
    );
  }
}

export default App;
