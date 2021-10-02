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
      <Dropdown>
        <RouteLink route="/" text="Home" />
        <RouteLink route="/beats" text="Beats" />
        <RouteLink route="/contact_us" text="Contact Us" />
        <RouteLink route="/merchandise" text="Merchandise" />
      </Dropdown>

      <Brand styleClass="nav-logo"/>
      <HorizontalBar styleClass="navbar">
        <RouteLink route="/" text="Home" />
        <RouteLink route="/beats" text="Beats" />
        <RouteLink route="/contact_us" text="Contact Us" />
        <RouteLink route="/merchandise" text="Merchandise" />
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