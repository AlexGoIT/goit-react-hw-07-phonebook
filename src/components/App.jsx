import Container from '@mui/material/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Title, ListTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container className="container" maxWidth="sm" sx={{ mt: 2 }}>
      <Title>Phonebook</Title>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      {!error && <ContactList />}
      {isLoading && !error && <Loader />}
    </Container>
  );
};

export default App;
