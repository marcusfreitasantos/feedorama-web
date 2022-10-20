import React, {useState, useEffect} from 'react'
import MainContentHeader from '../MainContentHeader'
import { MainContent__container, MainContent__section } from "../../styles/global";
import { Trash, Edit, CheckCircle, AlertCircle } from "react-feather";
import theme from "../../styles/theme";
import { useRouter } from 'next/router';
import { deleteCategories, getCategories } from '../../services/requests/categories';
import Modal from '../../components/Modal';


import * as S from './style'


export default function CategoryList(props) {
  const [sucessModal, setSucessModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const [categoriesList, setCategoriesList] = useState(props.categoriesList)

  const Router = useRouter()

  function AddNew(){
    Router.push(`/categories/new`)
  }

  function editCategory(categoryName){
    Router.push(`/categories/${categoryName}`)
  }

  async function deleteCategory(categoryName){
    const response = await deleteCategories(categoryName)

    if(response.status === 200){
      {setSucessModal(true)}
    }else{
      {setErrorModal(true)}
    }
  }


  async function getCategoriesList(){
    const content = await getCategories()
    setCategoriesList(content)
    setSucessModal(false)
    setErrorModal(false)
  }

  return (
    <MainContent__section>
      <MainContent__container>
        <MainContentHeader data={props.pageTitle} onClick={AddNew} />

        <S.MainContent__ContentWrapper>
          <S.Content__row>
            <S.Content__item className="row__header">ID</S.Content__item>
            <S.Content__item className="row__header">Nome</S.Content__item>
            <S.Content__item className="row__header">Ações</S.Content__item>
          </S.Content__row>
          {categoriesList &&
            categoriesList.map((item, index) => {
              return (
                <S.Content__row key={item.category}>
                  <S.Content__item>{index + 1}</S.Content__item>
                  <S.Content__item>{item.category}</S.Content__item>
                  <S.Content__item>
                    <S.Content__buttonWrapper>
                      <S.Content__button
                        onClick={() => editCategory(item.slug)}
                      >
                        <Edit width={24} color={theme.colors.yellow} />
                      </S.Content__button>

                      <S.Content__button
                        onClick={() => deleteCategory(item.slug)}
                      >
                        <Trash width={24} color={theme.colors.pink} />
                      </S.Content__button>
                    </S.Content__buttonWrapper>
                  </S.Content__item>
                </S.Content__row>
              );
            })}
        </S.MainContent__ContentWrapper>

        {sucessModal && (
          <Modal
            title="Categoria removida!"
            onClickConfirm={() => getCategoriesList()}
          >
            <CheckCircle width={40} height={40} color={theme.colors.yellow} />
          </Modal>
        )}
        {errorModal && (
          <Modal
            title="Oops. Há algo errado."
            onClickCancel={() => getCategoriesList()}
          >
            <AlertCircle width={40} height={40} color={theme.colors.pink} />
          </Modal>
        )}
      </MainContent__container>
    </MainContent__section>
  );
}
