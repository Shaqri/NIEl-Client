function BackgroundImage({path}) {
  const styleObj = {
    backgroundImage: `url(${path})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  }
  return(
    <div style={styleObj} className="background-image"/>
  );
};

export default BackgroundImage;