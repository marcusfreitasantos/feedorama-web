import React from "react";
import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm";
import Sidebar from "../../components/Sidebar";

export default function DefaultTemplate() {
  const router = useRouter();

  if (router.asPath === "/") {
    return <LoginForm />;
  } else {
    return <Sidebar />;
  }
}
