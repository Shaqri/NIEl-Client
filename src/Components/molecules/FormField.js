function FormField(props) {
  const {styleClass, preview,
     input, labelText, labelId, children} = props;
  return(
    <div className={`form-field ${styleClass}`}>
      {preview &&
        preview
      }
      
      <label className="field-label" htmlFor={labelId}>{labelText}</label>
      {input}
      {children}
    </div>
  )
};

export default FormField;