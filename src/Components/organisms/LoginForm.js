import TitleHeader from '../atoms/TitleHeader';
import Form from '../molecules/Form';
import TextInput from '../atoms/TextInput';
import {useState} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../../actions/index';

function LoginForm({login}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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