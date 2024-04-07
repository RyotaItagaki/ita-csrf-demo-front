// 2024-04-07T03:12:58.818Zのような日付を受け取り、2024/04/07 12:12:58のようなフォーマットに変換する関数
export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};