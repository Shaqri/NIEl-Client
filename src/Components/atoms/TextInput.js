function TextInput({placeholder, handleChange}) {
  return(
    <input placeholder={placeholder} type="text" onChange={handleChange}/>
  );
};

export default TextInput;