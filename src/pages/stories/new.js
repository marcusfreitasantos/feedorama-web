import React, {useState} from 'react'
import MainContentHeader from '../../components/MainContentHeader'
import { MainContent__container, MainContent__section } from "../../styles/global";
import { postStories } from '../../services/requests/stories';

import TextField from '../../components/TextField';
import Sidebar from '../../components/Sidebar'
import Button from '../../components/Buttons';
import CategorySelect from '../../components/CategorySelect';
import TextArea from '../../components/TextArea';
import { Type } from "react-feather";
import theme from "../../styles/theme";


export default function New () {
  const [storyTitle, setStoryTitle] = useState()
  const [storyCategory, setStoryCategory] = useState()
  const [storyContent, setStoryContent] = useState()

  async function createStory(e){
    e.preventDefault()
    const newStory = await postStories(storyTitle, storyCategory, storyContent )

    if(newStory.status === 200){
      alert("Story Publicado")
    }else{
      alert("Story não publicado")
    }
  }

  return (
    <>
      <Sidebar/>
      <MainContent__section>
        <MainContent__container>
          <MainContentHeader data="Novo story" />
            <form>
              <TextField value={storyTitle} placeholder="Digite o Título do Story" onChange={(e) => setStoryTitle(e.currentTarget.value)}><Type width={24} color={theme.colors.gray} /></TextField>
              <CategorySelect onChange={(e) => setStoryCategory(e.currentTarget.value)}/>

              <TextArea value={storyContent} onChange={(e) => setStoryContent(e.currentTarget.value)}/>

              <Button onClick={createStory}>Publicar</Button>
            </form>
          </MainContent__container>
      </MainContent__section>
    </>
  )
}
