import React from "react";
import * as Style from "./index.styled";

type CommentType = {
  name: string;
  text: string;
  id: number;
};
const Comments: React.FC<CommentType> = (props) => {
  return (
    <Style.CommentItem>
      <Style.Header>{props.name}</Style.Header>
        <Style.Text>{props.text}</Style.Text>
    </Style.CommentItem>
  );
};

export default Comments;
