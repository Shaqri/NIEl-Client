import TitleHeader from '../atoms/TitleHeader';
import Form from '../molecules/Form';
import TextInput from '../atoms/TextInput';
import {useEffect, useState} from 'react';

function SessionForm() {
  
  useEffect(() => {
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  return(
    <>
      <TitleHeader text="Sign up"/>
      <Form styleClass="session-form">
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
    </>
  );
}

export default SessionForm;