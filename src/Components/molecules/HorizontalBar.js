function HorizontalBar ({children, styleClass}) {
  return(
    <nav className={styleClass}>
      {children}
    </nav>
  );
};

export default HorizontalBar;