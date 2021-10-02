import HorizontalBar from '../molecules/HorizontalBar';
import RouteLink from '../atoms/RouteLink';
import Dropdown from '../molecules/Dropdown';
import Session from '../molecules/Session';
import Button from '../atoms/Button';
import {connect} from 'react-redux';
import {setUser} from '../../actions/index';
import {useNavigate} from 'react-router-dom';
import Brand from '../atoms/Brand';

function AppNav({user, setUser}) {

  const navigate = useNavigate();

  const handleLogOut = () => setUser(null);

  const renderUserSession = () => {
    if(user) return(
      <Session>
        <Button styleClass="header-button" text="Log Out" handleClick={handleLogOut}/>
      </Session>
    );

    return(
    <Session>
      <Button styleClass="header-button" text="Sign Up" handleClick={() => navigate('/signup')}/>
    </Session>
    );
    
  };

  return(
    <header id="header">
      <Dropdown styleClass="nav-dropdown">
        <RouteLink route="/home" text="Home" activeClass="active" />
        <RouteLink route="/beats" text="Beats" activeClass="active" />
        <RouteLink route="/merchandise" text="Merchandise" activeClass="active" />
        <RouteLink route="/contact_us" text="Contact Us" activeClass="active" />
      </Dropdown>

      <Brand styleClass="nav-logo"/>
      <HorizontalBar styleClass="navbar">
        <RouteLink route="/home" text="Home" activeClass="active" />
        <RouteLink route="/beats" text="Beats" activeClass="active" />
        <RouteLink route="/merchandise" text="Merchandise" activeClass="active" />
        <RouteLink route="/contact_us" text="Contact Us" activeClass="active" />
      </HorizontalBar>

      {renderUserSession()}
      

    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.current
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (data) => {dispatch(setUser(data))}
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);