import React from "react";
import Dashboard from "../../components/Dashboard";
import PlansList from "../../components/PlansList";
import Profile from "../../components/Profile";
import CategoryList from "../../components/CategoryList";
import Sidebar from "../../components/Sidebar";
import StoriesList from "../../components/StoriesList";
import UsersList from "../../components/UsersList";
import { useRouter } from "next/router";

export default function DefaultTemplate(props) {
  const Router = useRouter()

  return (
    <>
      <Sidebar />
      {Router.asPath === '/dashboard' && <Dashboard {...props} />}
      {Router.asPath === '/plans' && <PlansList {...props} />}
      {Router.asPath === '/profile' && <Profile {...props} />}
      {Router.asPath === '/categories' && <CategoryList {...props} />}
      {Router.asPath === '/stories' && <StoriesList {...props} />}
      {Router.asPath === '/users' && <UsersList {...props} />}
    </>
  );
}
