import { VFC } from "react";
import { TodoType } from "./types/todo";

//Pickの手法
// export const Todo = (
//   props: Pick<TodoType, "userId" | "title" | "completed">
// ) => {
//   const { title, userId, completed = false } = props;
//   const completeMark = completed ? "[完]" : "[未]";
//   return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
// };

export const Todo: VFC<Omit<TodoType, "id">> = (
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
