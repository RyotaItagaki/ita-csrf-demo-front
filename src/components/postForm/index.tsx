'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPost } from '@/lib';
import { postSchema, PostSchema } from '@/schema';
import styles from './style.module.scss';

type Props = {
  userId: number;
};

export const PostForm = ({ userId }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit: SubmitHandler<PostSchema> = async (data) => {
    const { text } = data;
    const body = {
      userId,
      text,
    };
    try {
      await createPost(body);

      // router.replace('/home');
      window.alert('投稿しました');
      window.location.reload();
    } catch (error) {
      window.alert('投稿に失敗しました');
    }
  };

  return (
    <div className={styles.postFormArea}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('text')} />
        {errors.text && <p>{errors.text.message}</p>}
        <button type="submit">投稿</button>
      </form>
    </div>
  );
};
