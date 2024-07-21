import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  useEffect(() => {
    console.log('Component has been rendered');
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail(email)) {
      console.log(`Email entered: ${email}`);
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" >
      Simple Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
            variant="outlined"
             error={!!emailError}
            helperText={emailError}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
