import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId');
  console.log('userId', userId);

  if (!userId) {
    redirect('/');
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
