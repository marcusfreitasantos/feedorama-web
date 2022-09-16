import React from "react";

import DefaultTemplate from "../../templates/DefaultTemplate";
import users from "../../mocks/users";

export default function Users(props) {
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Usuários";
  const usersList = users

  return {
    props: {
      pageTitle,
      usersList
    },
  };
}
