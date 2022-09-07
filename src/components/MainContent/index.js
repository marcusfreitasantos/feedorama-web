import React from "react";
import * as S from "./style";

export default function MainContent(props) {
  console.log(props.stories);
  return (
    <S.MainContent__section>
      {props.pageTitle}
      <div>
        {props.stories &&
          props.stories.map((story) => {
            return <p key={story.id}>{story.title}</p>;
          })}
      </div>
    </S.MainContent__section>
  );
}
