import React, { Component } from 'react';
import Password from './Password';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { handleSubmit } = this.props;
        handleSubmit(this.state);
    }

    render() {
        return (
            <>
                <div className="form-group">
                    <label
                        htmlFor="name"
                        className="col-sm-2 col-form-label control-label">
                        Name</label>
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        onChange={(e) => this.setState({ name: e.currentTarget.value })}
                    />

                </div>

                <div className="form-group">
                    <label
                        htmlFor="name"
                        className="col-sm-2 col-form-label control-label">
                        Email</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="text"
                        onChange={(e) => this.setState({ email: e.currentTarget.value })}
                    />

                </div>

                <button onClick={this.handleClick} className="btn btn-primary" type="submit">Submit</button>
            </>
        )
    }

}


export default Form;