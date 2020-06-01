import React from "react";

const style = {
    border: "2px solid red"
};

const Password = ({ label, handleChange, minimumLength, value, valid }) => (
    <div className="form-group">
        <label
            className="col-sm-2 col-form-label"
            htmlFor={label}>{label}
            <input
                type="password"
                id={label}
                name={label}
                value={value}
                onChange={handleChange}
                style={!valid ? style : null}
            />
        </label>
    </div>
);
export default Password;