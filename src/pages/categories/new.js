import React from "react";

import CategoryTemplate from "../../templates/CategoryTemplate";
import nookies from "nookies";

export default function Category() {
  return <CategoryTemplate />;
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
