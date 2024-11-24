import PropTypes from "prop-types";

const InputField = ({ value, onChange, placeholder, type = "text", className = "" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-2 border rounded-md ${className}`}
    />
  );
};


//prop handling
InputField.propTypes = {
  value: PropTypes.string.isRequired, // Ensure 'value' is a string and required
  onChange: PropTypes.func.isRequired, // Ensure 'onChange' is a function and required
  placeholder: PropTypes.string, // Optional: Ensure 'placeholder' is a string
  type: PropTypes.string, // Optional: Ensure 'type' is a string
  className: PropTypes.string, // Optional: Ensure 'className' is a string
};

InputField.defaultProps = {
  placeholder: "", // Default placeholder
  type: "text", // Default input type
  className: "", // Default className
};

export default InputField;
