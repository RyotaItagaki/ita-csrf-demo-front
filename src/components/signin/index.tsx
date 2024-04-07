'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from '@/lib';
import { signInSchema, SignInSchema } from '@/schema';
import styles from './style.module.scss';

export const SignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
    const { email, password } = data;
    // console.log(data);
    try {
      const response = await signIn(email, password);  
      // console.log(response);

      router.replace('/home');
    } catch (error) {
      window.alert('ログインに失敗しました');
    }
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
    </form>
  );
};
