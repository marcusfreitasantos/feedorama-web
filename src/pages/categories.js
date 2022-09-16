import React from "react";

import DefaultTemplate from "../templates/DefaultTemplate";
import categories from "../mocks/categories";

export default function Categories(props) {
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Categorias";
  const categoriesList = categories

  return {
    props: {
      pageTitle,
      categoriesList
    },
  };
}
