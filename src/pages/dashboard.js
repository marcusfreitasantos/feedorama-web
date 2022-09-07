import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

export default function Dashboard(props) {
  return <DefaultTemplate {...props} />;
}

export async function getServerSideProps() {
  const pageTitle = "Dashboard";

  return {
    props: {
      pageTitle,
    },
  };
}
