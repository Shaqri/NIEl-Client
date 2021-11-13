import Button from '../atoms/Button';
function Form({children, styleClass, handleSubmit, buttonText}) {

  return(
    <form className={`form ${styleClass}`}>
      {children}
      <Button handleClick={handleSubmit} text={buttonText}/>
    </form>
  );
}

export default Form;