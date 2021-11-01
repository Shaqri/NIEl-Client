function Image({path, styleClass}) {
  return(
    <img src={path} className={`full-width-height ${styleClass}`} />
  )
};

export default Image;