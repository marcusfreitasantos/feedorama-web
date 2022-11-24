import React from "react";

import { getStories } from "../../services/requests/stories";
import DefaultTemplate from "../../templates/DefaultTemplate";
import nookies from "nookies";

export default function Stories(props) {
  return <DefaultTemplate {...props} />;
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
  const content = await getStories(cookies.userToken.toString());

  return {
    props: {
      content,
      pageTitle,
      cookies,
    },
  };
}
