import React, {useState, useEffect} from 'react'
import MainContentHeader from '../../components/MainContentHeader'
import { MainContent__container, MainContent__section } from "../../styles/global";
import { postStories } from '../../services/requests/stories';

import TextField from '../../components/TextField';
import Sidebar from '../../components/Sidebar'
import Button from '../../components/Buttons';
import CategorySelect from '../../components/CategorySelect';
import TextArea from '../../components/TextArea';
import { Type, CheckCircle, AlertCircle } from "react-feather";
import theme from "../../styles/theme";
import Modal from '../../components/Modal';
import { useRouter } from 'next/router';


export default function New () {
  const router = useRouter()
  const [storyTitle, setStoryTitle] = useState()
  const [storyCategory, setStoryCategory] = useState()
  const [storyContent, setStoryContent] = useState()
  const [active, isActive] = useState(false)
  const [sucessModal, setSucessModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)


  async function createStory(e){
    e.preventDefault()
    const newStory = await postStories(storyTitle, storyCategory, storyContent )

    if(newStory.status === 200){
      {setSucessModal(true)}
    }else{
      {setErrorModal(true)}
    }
  }

  function validateForm(){
    if(storyTitle?.length >= 3 && storyCategory?.length > 0 && storyContent?.length >= 3 ){
      isActive(true)
    }else{
      isActive(false)
    }
  }

  function backToStories(){
    router.push('/stories')
  }

  useEffect(() => {
    validateForm()
  },[storyTitle, storyCategory, storyContent])



  return (
    <>
      <Sidebar/>
      <MainContent__section>
        <MainContent__container>
          <MainContentHeader data="Novo story" />
            <form>
              <TextField value={storyTitle} placeholder="Digite o Título do Story" onBlur={validateForm} onChange={(e) => setStoryTitle(e.currentTarget.value)}><Type width={24} color={theme.colors.gray} /></TextField>
              <CategorySelect onChange={(e) => setStoryCategory(e.currentTarget.value)}/>

              <TextArea onBlur={validateForm} value={storyContent} onChange={(e) => setStoryContent(e.currentTarget.value)}/>

              <Button onClick={createStory} buttonActive={active}>Publicar</Button>
            </form>

            {sucessModal && <Modal title="Story publicado!" onClickConfirm={backToStories}><CheckCircle width={40} height={40} color={theme.colors.yellow}  /></Modal> }
            {errorModal && <Modal title="Oops. Há algo errado." onClickCancel={() => setErrorModal(false)}><AlertCircle width={40} height={40} color={theme.colors.pink} /></Modal> }

            
          </MainContent__container>
      </MainContent__section>
    </>
  )
}
