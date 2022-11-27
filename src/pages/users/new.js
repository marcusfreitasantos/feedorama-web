import React from "react";

import UsersTemplate from "../../templates/UsersTemplate";
import nookies from "nookies";

export default function Users() {
  return <UsersTemplate />;
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
