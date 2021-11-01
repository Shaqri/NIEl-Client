function Title({styleClass, text}) {
  return(
    <h3 className={`title ${styleClass}`}>
      <span>{text}</span>
    </h3>
  )
};

export default Title;