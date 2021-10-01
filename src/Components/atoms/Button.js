function Button({styleClass, text, handleClick}) {
  return(
    <button
    onClick={handleClick} 
    type="button" 
    className={styleClass}>{text}</button>
  );
}

export default Button;