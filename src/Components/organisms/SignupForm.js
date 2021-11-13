import TitleHeader from '../atoms/TitleHeader';
import Form from '../molecules/Form';
import TextInput from '../atoms/TextInput';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../../actions/index';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function SignupForm({signUp, user}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if(user) navigate('/')
  }, [user]);

  const handleSubmit = () => {
    signUp({
      user: {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      }
    });
  };

  return(
    <>
      <TitleHeader text="Sign up"/>
      <Form buttonText="Sign Up" styleClass="session-form" handleSubmit={handleSubmit}>
        <TextInput placeholder="Name" value={name} handleChange={setName} />
        <TextInput placeholder="Email" value={email} handleChange={setEmail} />
        <TextInput hideText placeholder="Password" value={password} handleChange={setPassword} />
        <TextInput 
        hideText 
        placeholder="Password confirmation"
        value={passwordConfirmation}
        handleChange={setPasswordConfirmation}
        />
      </Form>

      <p>Already have an account?</p>
      <Link className="session-link" to="/login">Login</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.current
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => {dispatch(createUser(data))}
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);