import React, { Component } from 'react';
import Password from './Password';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirm: ""
        };
    }

    render() {
        let { minimumLength } = this.props;
        let { password, confirm } = this.state;

        const valid = (password === confirm) && (password.length > minimumLength);

        return (
            <form className="form-group">
                <Password
                    label="Password: "
                    value={this.state.password}
                    handleChange={(e) => this.setState({ password: e.currentTarget.value })}
                    valid={valid}
                />
                <Password
                    class="form-control"
                    label="Confirm password: "
                    value={this.state.confirm}
                    handleChange={(e) => this.setState({ confirm: e.currentTarget.value })}
                    valid={valid}
                />
            </form>
        );
    }

}

export default Signup;