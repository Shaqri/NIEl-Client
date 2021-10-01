import Button from '../atoms/Button';
import {useRef} from 'react';

function Dropdown({children}) {
  const dropdownRef = useRef(null);
  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('hidden')
  };
  return(
    <>
      <Button icon="fas fa-bars" handleClick={handleDropdown} />
      <ul ref={dropdownRef} className="dropdown-list hidden">
        {children}
      </ul>
    </>
  )
};

export default Dropdown;