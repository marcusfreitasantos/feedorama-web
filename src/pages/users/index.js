import React from "react";

import DefaultTemplate from "../../templates/DefaultTemplate";
import { getUsers, getUsersFetchApi } from "../../services/requests/users";
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
  const users = await getUsers(cookies.userToken);
  const pageTitle = "Usuários";

  return {
    props: {
      pageTitle,
      cookies,
      users,
    },
  };
}
