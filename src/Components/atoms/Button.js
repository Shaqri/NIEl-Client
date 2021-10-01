function Button({styleClass, text, handleClick, icon}) {
  
  return(
    <button
    onClick={handleClick} 
    type="button" 
    className={styleClass}>
      {icon && <i class={icon}/>}
      {text}
    </button>
  );
}

export default Button;