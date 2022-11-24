import React from "react";

import StoryTemplate from "../../templates/StoryTemplate";
import nookies from "nookies";

export default function Stories() {
  return <StoryTemplate />;
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

  return {
    props: {
      cookies,
    },
  };
}
