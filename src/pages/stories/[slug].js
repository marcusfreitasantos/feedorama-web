import React from "react";

import { getStoryById } from "../../services/requests/stories";

import StoryTemplate from "../../templates/StoryTemplate";

export default function Stories(props) {
  return <StoryTemplate {...props} />;
}

export async function getServerSideProps({params}) {
  const pageTitle = "Stories";
  const story = await getStoryById(params.slug);

  return {
    props: {
      story,
      pageTitle,
    },
  };
}
