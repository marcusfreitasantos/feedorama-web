import React from "react";

import DefaultTemplate from "../templates/DefaultTemplate";
import { getCategories } from "../services/requests/categories";

export default function Categories(props) {
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Categorias";
  const categoriesList = await getCategories()

  console.log(categoriesList)


  return {
    props: {
      pageTitle,
      categoriesList
    },
  };
}
