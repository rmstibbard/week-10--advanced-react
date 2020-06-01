import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { clicks } = this.state;
        let count = clicks + 1;

        this.setState({ clicks: count });

        this.props.handleUpdate(count);
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Click Me!</button>
            </>
        );
    }
}

export default Button;