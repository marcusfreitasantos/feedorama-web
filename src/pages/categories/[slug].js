import React from "react";

import { getCategoryByName } from "../../services/requests/categories";

import CategoryTemplate from "../../templates/CategoryTemplate";
import nookies from "nookies";

export default function Category(props) {
  return <CategoryTemplate {...props} />;
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

  const pageTitle = "Category";
  const category = await getCategoryByName(
    context.params.slug,
    cookies.userToken.toString()
  );

  return {
    props: {
      category,
      pageTitle,
    },
  };
}
