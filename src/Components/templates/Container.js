 function Container({children, styleClass}) {
  return(
    <section className={`container-view-size ${styleClass}`}>
      {children}
    </section>
  );
 };

 export default Container;