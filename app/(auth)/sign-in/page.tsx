'use client'
import React from 'react'
import { signInSchema } from '../../../lib/validations';
import AuthForm from '@/components/AuthForm';


const page = () => (
    <AuthForm
    type='SIGN_IN'
    schema={signInSchema}
    defaultValues={{
         email: '',
        password: '',
    }}
    onSubmit={()=> {}}
      />
    )

export default page