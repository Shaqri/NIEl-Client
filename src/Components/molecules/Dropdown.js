import Button from '../atoms/Button';
import {useRef} from 'react';

function Dropdown({children, styleClass, label, icon}) {
  const dropdownRef = useRef(null);
  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('hidden')
  };
  return(
    <div className={`l-dropdown ${styleClass}`}>
      <Button styleClass="dropdown-button" text={label} icon={icon} handleClick={handleDropdown} />
      
      <ul ref={dropdownRef} className="dropdown-list hidden">
        {children}
      </ul>
    </div>
  )
};

export default Dropdown;