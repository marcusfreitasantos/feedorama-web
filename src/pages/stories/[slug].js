import React from "react";

import { getStoryById } from "../../services/requests/stories";
import StoryTemplate from "../../templates/StoryTemplate";
import nookies from "nookies";

export default function Stories(props) {
  return <StoryTemplate {...props} />;
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);

  if (!cookies.userToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const pageTitle = "Stories";
  const story = await getStoryById(
    context.params.slug,
    cookies.userToken.toString()
  );

  return {
    props: {
      story,
      pageTitle,
      cookies,
    },
  };
}
