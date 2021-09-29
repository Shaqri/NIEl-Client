function Button({styleClass, text}) {
  return(
    <button type="button" className={styleClass}>{text}</button>
  );
}

export default Button;