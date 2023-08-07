import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { Container } from '@mui/material';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { ListTitle } from 'components/App.styled';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container className="container" maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
        <ContactForm />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        {!error && <ContactList />}
        {isLoading && !error && <Loader />}
      </Container>
    </>
  );
};

export default HomePage;
