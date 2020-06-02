import React from "react";

const style1 = {
    border: "2px solid green",
    outline: "none"
};

const style2 = {
    border: "2px solid red",
    outline: "none"
};

const Password = ({ label, handleChange, minimumLength, value, valid }) => (
    <div className="form-group">
        <label
            className="col-sm-2 col-form-label control-label"
            htmlFor={label}>{label}
            <input
                type="password"
                id={label}
                name={label}
                value={value}
                onChange={handleChange}
                style={valid ? style1 : style2}
            />
        </label>
    </div>
);
export default Password;