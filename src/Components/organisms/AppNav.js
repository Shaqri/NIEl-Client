import HorizontalBar from '../molecules/HorizontalBar';
import RouteLink from '../atoms/RouteLink';
import Dropdown from '../molecules/Dropdown';
import UserSession from '../molecules/UserSession';

function AppNav() {

  return(
    <header id="header">
      <Dropdown>
        <RouteLink route="/" text="Home" />
        <RouteLink route="/beats" text="Beats" />
        <RouteLink route="/contact_us" text="Contact Us" />
        <RouteLink route="/merchandise" text="Merchandise" />
      </Dropdown>

      <div>NIELBEATS</div>
      <HorizontalBar styleClass="navbar">
        <RouteLink route="/" text="Home" />
        <RouteLink route="/beats" text="Beats" />
        <RouteLink route="/contact_us" text="Contact Us" />
        <RouteLink route="/merchandise" text="Merchandise" />
      </HorizontalBar>

      <UserSession/>
      

    </header>
  );
};

export default AppNav;