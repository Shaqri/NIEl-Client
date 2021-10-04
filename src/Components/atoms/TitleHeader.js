function TitleHeader({text, styleClass}) {
  return(
    <h1 className={`title-header ${styleClass}`}>
      <span>
        {text}
      </span>
    </h1>
  );
}

export default TitleHeader;