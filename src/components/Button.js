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
        // destructure props to get the handleSubmit function
        // this must be passed in from the parent
        let { handleSubmit } = this.props;

        // now, call the passed in handleSubmit function
        // and pass it the current value of count
        handleSubmit(this.state.count);

    }

    render() {
        let { count } = this.state;

        return (
            <button onClick={this.handleUpdate}>Submit</button>
        );

    }

}

export default Button;