import Button from '../atoms/Button';
import {useRef} from 'react';

function Dropdown({children, styleClass}) {
  const dropdownRef = useRef(null);
  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('hidden')
  };
  return(
    <div className={`l-dropdown ${styleClass}`}>
      <Button styleClass="header-button dropdown-button" icon="fas fa-bars" handleClick={handleDropdown} />
      <ul ref={dropdownRef} className="dropdown-list hidden">
        {children}
      </ul>
    </div>
  )
};

export default Dropdown;