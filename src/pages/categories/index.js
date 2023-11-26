import React from "react";

import DefaultTemplate from "../../templates/DefaultTemplate";
import { getCategories } from "../../services/requests/categories";
import nookies from "nookies";

export default function Categories(props) {
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

  const pageTitle = "Categorias";
  const categoriesList = await getCategories(cookies.userToken);

  return {
    props: {
      pageTitle,
      categoriesList,
      cookies,
    },
  };
}
