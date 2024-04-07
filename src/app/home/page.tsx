import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { listPosts } from '@/lib';
import { PostCard } from '@/components/postCard';
import styles from './style.module.scss';

export default async function Home() {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId');
  console.log('userId', userId);

  if (!userId) {
    redirect('/');
  }

  const posts = await listPosts();

  return (
    <div className={styles.page}>
      <h2>投稿一覧</h2>
      <div className={styles.postArea}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            userName={post.user.name}
            text={post.text}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
