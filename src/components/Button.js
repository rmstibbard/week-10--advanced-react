import React, { Component } from "react";

class Button extends Component {
    constructor(props) {

        super(props);

        this.state = {
            count: 0,
        };

        this.handleUpdate = this.handleUpdate.bind(this);

    }

    handleUpdate() {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
    }

    render() {
        let { count } = this.state;

        return (
            <button className="btn btn-primary" onClick={this.handleUpdate}>Click me!</button>
        );

    }

}

export default Button;