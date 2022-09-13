import React from 'react'
import MainContentHeader from '../MainContentHeader'
import { MainContent__container, MainContent__section } from "../../styles/global";


export default function SegmentsList(props) {
  return (
    <MainContent__section>
      <MainContent__container>
        <MainContentHeader data={props.pageTitle} />
      </MainContent__container>
    </MainContent__section>
  )
}
