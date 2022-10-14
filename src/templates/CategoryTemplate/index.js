import React, {useState, useEffect} from 'react'
import MainContentHeader from '../../components/MainContentHeader'
import { MainContent__container, MainContent__section } from "../../styles/global";
import { postCategories } from '../../services/requests/categories';
import TextField from '../../components/TextField';
import Sidebar from '../../components/Sidebar'
import Button from '../../components/Buttons';
import TextArea from '../../components/TextArea';
import { Type, CheckCircle, AlertCircle } from "react-feather";
import theme from "../../styles/theme";
import Modal from '../../components/Modal';
import { useRouter } from 'next/router';


export default function CategoryTemplate (props) {
    console.log(props)
  const router = useRouter()
  const [categoryName, setCategoryName] = useState(props.category.category)
  const [description, setDescription] = useState(props.category.description)
  const [active, isActive] = useState(false)
  const [sucessModal, setSucessModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)


  async function createCategory(e){
    e.preventDefault()
    const newCategory = await postCategories(categoryName, description )

    if(newCategory.status === 200){
      {setSucessModal(true)}
    }else{
      {setErrorModal(true)}
    }
  }

  function validateForm(){
    if(categoryName?.length >= 3 && description?.length > 0 ){
      isActive(true)
    }else{
      isActive(false)
    }
  }

  function backToCategories(){
    router.push('/categories')
  }

  useEffect(() => {
    validateForm()
  },[categoryName, description])



  return (
    <>
      <Sidebar/>
      <MainContent__section>
        <MainContent__container>
          <MainContentHeader data={categoryName} />
            <form>
              <TextField value={categoryName} placeholder="Digite o nome da Categoria" onBlur={validateForm} onChange={(e) => setCategoryName(e.currentTarget.value)}><Type width={24} color={theme.colors.gray} /></TextField>

              <TextArea onBlur={validateForm} placeholder="Digite uma descrição" value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>

              <Button onClick={createCategory} buttonActive={active}>Publicar</Button>
            </form>

            {sucessModal && <Modal title="Categoria publicada!" onClickConfirm={backToCategories}><CheckCircle width={40} height={40} color={theme.colors.yellow}  /></Modal> }
            {errorModal && <Modal title="Oops. Há algo errado." onClickCancel={() => setErrorModal(false)}><AlertCircle width={40} height={40} color={theme.colors.pink} /></Modal> }

            
          </MainContent__container>
      </MainContent__section>
    </>
  )
}
