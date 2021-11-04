function Image({path, styleClass, containerClass}) {
  return(
    <div className={`image-container ${containerClass}`}>
      <img src={path} className={`full-width-height ${styleClass}`} />
    </div>
    
  )
};

export default Image;