function TextInput({placeholder, handleChange, hideText, value, id}) {
  return(
    <input
    id={id}
    className="input"
    value={value}
    placeholder={placeholder} 
    type={hideText ? "password" : "text"} 
    onChange={handleChange}
    />
  );
};

export default TextInput;