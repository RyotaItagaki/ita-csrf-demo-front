import {formatDate} from '@/utils/formatDate'
import styles from './style.module.scss';

type Props = {
  userName: string;
  text: string;
  createdAt: string;
}

export const PostCard = ({userName, text, createdAt}: Props) => {
  const formattedDate = formatDate(createdAt);

  return (
    <div className={styles.postCard}>
      <p className={styles.userName}>{userName}</p>
      <p>{text}</p>
      <p className={styles.createdAt}>{formattedDate}</p>
    </div>
  );
};