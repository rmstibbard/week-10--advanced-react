import React, { Component } from 'react';
import FormComp from './FormComp';

class FormSeparate extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <>
                {
                    this.props.fields.map((fieldObject) => (
                        <FormComp
                            label={fieldObject.label}
                            name={fieldObject.name}
                            type={fieldObject.type}
                        />
                    ))
                }
            </>
        )
    }

}


export default FormSeparate;