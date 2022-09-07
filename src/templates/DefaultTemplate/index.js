import React from "react";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import * as S from "./style";

export default function DefaultTemplate(props) {
  return (
    <S.Section>
      <Sidebar />
      <MainContent {...props} />
    </S.Section>
  );
}
