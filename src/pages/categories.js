import React from "react";

import DefaultTemplate from "../templates/DefaultTemplate";

export default function Categories(props) {
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Categorias";

  return {
    props: {
      pageTitle,
    },
  };
}
