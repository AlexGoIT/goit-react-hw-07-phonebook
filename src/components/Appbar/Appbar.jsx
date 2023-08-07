import { NavLink } from 'react-router-dom';
import { AppBar, Container } from '@mui/material';

const Appbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
        <h1>Phonebook</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Container>
    </AppBar>
  );
};

export default Appbar;
