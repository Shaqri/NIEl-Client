function HoverDropdown({labelText, children, list, styleClass}) {
  return(
    <div className={`l-hover-dropdown ${styleClass}`}>
      <div className="dropdown-label">{labelText}</div>
      <div className="dropdown-list hidden">
        <ul >
          {list}
        </ul>
        {children}
      </div>
    </div>
  )
};

export default HoverDropdown;