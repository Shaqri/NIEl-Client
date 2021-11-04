function HorizontalList ({children, styleClass, list}) {
  return(
    <div className={`horizontal-list ${styleClass}`}>
      {list &&
        list
      }
    </div>
  );
};

export default HorizontalList;