function Button({styleClass, text, handleClick, icon}) {
  
  return(
    <button
    onClick={handleClick} 
    type="button" 
    className={styleClass}>
      {icon && <i className={icon}/>}
      {text}
    </button>
  );
}

export default Button;