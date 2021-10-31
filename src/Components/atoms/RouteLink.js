import {NavLink as Link} from 'react-router-dom'

function RouteLink ({route, text, onClick, activeClass}) {
  return(
    <Link to={route} onClick={onClick} activeClassName="active-link">
      {text}
    </Link>
  );
};

export default RouteLink;