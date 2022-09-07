import React from "react";

import DefaultTemplate from "../../templates/DefaultTemplate";

export default function Users(props) {
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Usuários";

  return {
    props: {
      pageTitle,
    },
  };
}
