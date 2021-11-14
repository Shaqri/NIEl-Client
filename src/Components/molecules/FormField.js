function FormField(props) {
  const {styleClass, preview,
     input, labelText, labelId, children} = props;
  return(
    <div className={`form-field ${styleClass}`}>
      <div className="field">
        {preview &&
          preview
        }
        <label className="field-label" htmlFor={labelId}>{labelText}</label>
        {input}
      </div>
      
      <div className="metadata">
        {children}
      </div>
      
    </div>
  )
};

export default FormField;