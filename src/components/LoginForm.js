import React from 'react';
import Input from './Input';
import Button from './Button';

const LoginForm = () => {
  return (
    <div className="max-w-md">
      <Input label="Email" placeholder="you@example.com" />
      <Input type="password" label="Password" placeholder="••••••••" />
      <Button variant="primary">Login</Button>
    </div>
  );
};

export default LoginForm;
