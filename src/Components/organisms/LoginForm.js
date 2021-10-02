import TitleHeader from '../atoms/TitleHeader';
import Form from '../molecules/Form';
import TextInput from '../atoms/TextInput';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../../actions/index';
import {Link, useNavigate} from 'react-router-dom';
function LoginForm({login, user}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if(user) navigate('/');
  }, [user]);

  const handleSubmit = () => {
    login({
      user: {
        email,
        password
      }
    });
  };

  return(
    <>
      <TitleHeader text="Log In" />
      <Form button="Log In" styleClass="session-form" handleSubmit={handleSubmit}>
        <TextInput value={email} placeholder="Email" handleChange={setEmail}/>
        <TextInput value={password} hideText placeholder="Password" handleChange={setPassword} />
      </Form>
      
      <p>Don't have an account?</p>
      <Link className="session-link" to="/signup" >Sign up</Link>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.current
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => {dispatch(authenticateUser(data))} 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);