'use client';

import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, hello } from '@/lib';
import { signInSchema, SignInSchema } from '@/schema';
import styles from './style.module.scss';

export const SignIn = () => {
  const { register, handleSubmit } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
    const { email, password } = data;
    const response = await signIn(email, password);
    console.log(response);
  };

  const test = () => {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formItem}>
        <label>Email</label>
        <input {...register('email')} />
      </div>
      <div className={styles.formItem}>
        <label>Password</label>
        <input {...register('password')} />
      </div>
      <button type="submit">Sign in</button>
      <button type="button" onClick={hello}>
        hello
      </button>
    </form>
  );
};
