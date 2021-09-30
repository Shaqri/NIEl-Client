import Button from '../atoms/Button';
function Form({children, styleClass}) {

  return(
    <form className={styleClass}>
      {children}
      <Button text="Sign up"/>
    </form>
  );
}

export default Form;