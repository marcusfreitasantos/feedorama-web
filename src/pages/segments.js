import React from "react";

import DefaultTemplate from "../templates/DefaultTemplate";

export default function Profile(props) {
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Segmentos";

  return {
    props: {
      pageTitle,
    },
  };
}
