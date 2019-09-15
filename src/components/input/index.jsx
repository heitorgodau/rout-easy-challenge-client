import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    type,
    name,
    value,
    onChange,
    placeholder,
    isDisabled,
  } = props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      disabled={isDisabled}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  isDisabled: false,
};

export default Input;
