import {NavLink as Link} from 'react-router-dom'

function RouteLink ({route, text}) {
  return(
    <Link to={route}>
      {text}
    </Link>
  );
};

export default RouteLink;