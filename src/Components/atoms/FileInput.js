function FileInput({accept, handleChange, id}) {
  return(
    <input 
      onChange={handleChange}
      type="file"
      className="file-input"
      accept={accept}
      id={id}
    />
  )
};

export default FileInput;