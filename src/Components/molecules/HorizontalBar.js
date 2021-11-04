function HorizontalBar ({children, styleClass}) {
  return(
    <nav className={`horizontal-list ${styleClass}`}>
      {children}
    </nav>
  );
};

export default HorizontalBar;