import React from "react";

import { getStories } from "../../services/requests/stories";

import DefaultTemplate from "../../templates/DefaultTemplate";

export default function Stories(props) {
  console.log(props)
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Stories";
  const content = await getStories();

  return {
    props: {
      content,
      pageTitle,
    },
  };
}
