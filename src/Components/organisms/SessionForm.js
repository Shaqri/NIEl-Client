import TitleHeader from '../atoms/TitleHeader';
import Form from '../molecules/Form';
import TextInput from '../atoms/TextInput';
import {useEffect} from 'react';

function SessionForm() {

  useEffect(() => {
    console.log(process.env.REACT_APP_COUNTRIES_AUTH_TOKEN)
    const requestCountries = async () => {
      const request = await fetch('https://www.universal-tutorial.com/api/countries/', {
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_COUNTRIES_AUTH_TOKEN}`
        }
      });
      console.log(request)
    };

    requestCountries();
  }, []);
  return(
    <>
      <TitleHeader text="Sign up"/>
      <Form styleClass="session-form">
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" />
      </Form>
    </>
  );
}

export default SessionForm;