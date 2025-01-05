import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage: React.FC = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center overflow-visible pt-64'>
      <SignUp />
    </main>
  );
}

export default SignUpPage;