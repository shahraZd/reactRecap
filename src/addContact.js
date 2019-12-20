import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    isFamily: false
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name: "
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Phone: "
            onChange={event => this.setState({ phone: event.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email: "
            onChange={event => this.setState({ email: event.target.value })}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            onChange={event =>
              event.target.checked && this.setState({ isFamily: true })
            }
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Family
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option1"
            onChange={event =>
              event.target.checked && this.setState({ isFamily: false })
            }
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Friend
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.addNewContact(this.state)}
        >
          Save
        </button>
      </form>
    );
  }
}
export default AddContact;
