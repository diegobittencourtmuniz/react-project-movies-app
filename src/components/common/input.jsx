import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input autoFocus {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

// type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
// sinc the left and right names are same we are using ...rest

export default Input;
