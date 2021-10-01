import Button from '../atoms/Button';
function Form({children, styleClass, handleSubmit, button}) {

  return(
    <form className={styleClass}>
      {children}
      <Button handleClick={handleSubmit} text={button}/>
    </form>
  );
}

export default Form;