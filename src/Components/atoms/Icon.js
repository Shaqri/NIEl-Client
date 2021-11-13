function Icon({styleClass, icon, containerClass}) {
  return(
    <div className={`icon-container ${containerClass}`}>
      <i className={`${icon} ${styleClass}`} />
    </div>
  )
};

export default Icon;