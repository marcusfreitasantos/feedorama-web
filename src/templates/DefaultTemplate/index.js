import React from "react";
import CategoryList from "../../components/CategoryList";
import Sidebar from "../../components/Sidebar";
import StoriesList from "../../components/StoriesList";
import UsersList from "../../components/UsersList";
import { useRouter } from "next/router";

export default function DefaultTemplate(props) {
  const Router = useRouter();

  return (
    <>
      <Sidebar />
      {Router.asPath === "/categories" && <CategoryList {...props} />}
      {Router.asPath === "/stories" && <StoriesList {...props} />}
      {Router.asPath === "/users" && <UsersList {...props} />}
    </>
  );
}
