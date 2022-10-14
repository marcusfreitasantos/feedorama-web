import React from "react";

import { getCategoryByName } from "../../services/requests/categories";

import CategoryTemplate from "../../templates/CategoryTemplate";

export default function Category(props) {
  return <CategoryTemplate {...props} />;
}

export async function getServerSideProps({params}) {
  const pageTitle = "Category";
  const category = await getCategoryByName(params.slug);

  return {
    props: {
      category,
      pageTitle,
    },
  };
}
