import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email({}),
  password: z.string().min(0, {
    message: 'パスワードを入力してください',
  }).min(8, {
    message: 'パスワードは8文字以上で入力してください',
  })
});

export type SignInSchema = z.infer<typeof signInSchema>;

export const postSchema = z.object({
  text: z.string().min(0, {
    message: '本文を入力してください',
  }),
});

export type PostSchema = z.infer<typeof postSchema>;