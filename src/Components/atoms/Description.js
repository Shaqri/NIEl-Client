function Description({styleClass, text}) {
  return(
    <p className={`description ${styleClass}`} >
      {text}
    </p>
  )
};

export default Description;