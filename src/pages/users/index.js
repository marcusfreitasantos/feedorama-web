import React from "react";

import DefaultTemplate from "../../templates/DefaultTemplate";
import users from "../../mocks/users";
import nookies from "nookies";

export default function Users(props) {
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
  const pageTitle = "Usuários";
  const usersList = users;

  return {
    props: {
      pageTitle,
      usersList,
      cookies,
    },
  };
}
