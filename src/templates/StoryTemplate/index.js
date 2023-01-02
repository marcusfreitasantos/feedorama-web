import React, { useState, useEffect } from "react";
import MainContentHeader from "../../components/MainContentHeader";
import {
  MainContent__container,
  MainContent__section,
} from "../../styles/global";
import { postStories, updateStories } from "../../services/requests/stories";

import TextField from "../../components/TextField";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Buttons";
import CategorySelect from "../../components/CategorySelect";
import TextArea from "../../components/TextArea";
import { Type, CheckCircle, AlertCircle } from "react-feather";
import theme from "../../styles/theme";
import Modal from "../../components/Modal";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

export default function StoryTemplate(props) {
  const token = parseCookies().userToken;
  const router = useRouter();
  const [storyTitle, setStoryTitle] = useState(props.story?.title || "");
  const [storyCategory, setStoryCategory] = useState(props.story?.category);
  const [storyContent, setStoryContent] = useState(props.story?.content || "");
  const [storyDate, setStoryDate] = useState(
    props.story?.date_for_search || ""
  );
  const [active, isActive] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  async function createStory() {
    const newStory = await postStories(
      storyTitle,
      storyCategory,
      storyContent,
      storyDate,
      token
    );

    if (newStory.status === 200) {
      {
        setSucessModal(true);
      }
    } else {
      {
        setErrorModal(true);
      }
    }
  }

  async function updateStorybyId() {
    const newStory = await updateStories(
      props.story.id,
      storyTitle,
      storyContent,
      token
    );

    if (newStory.status === 200) {
      {
        setSucessModal(true);
      }
    } else {
      {
        setErrorModal(true);
      }
    }
  }

  function validateForm() {
    if (
      storyTitle?.length >= 3 &&
      storyCategory?.length > 0 &&
      storyContent?.length >= 3 &&
      storyDate !== ""
    ) {
      isActive(true);
    } else {
      isActive(false);
    }
  }

  function backToStories() {
    router.push("/stories");
  }

  function handleClick(e) {
    e.preventDefault();
    if (router.asPath.includes("new")) {
      createStory();
    } else {
      updateStorybyId();
    }
  }

  useEffect(() => {
    validateForm();
  }, [storyTitle, storyCategory, storyContent, storyDate]);

  return (
    <>
      <Sidebar />
      <MainContent__section>
        <MainContent__container>
          <MainContentHeader data={storyTitle || "Novo Story"} />
          <form>
            <TextField
              value={storyTitle}
              placeholder="Digite o Título do Story"
              onBlur={validateForm}
              onChange={(e) => setStoryTitle(e.currentTarget.value)}
            >
              <Type width={24} color={theme.colors.gray} />
            </TextField>

            <CategorySelect
              defaultValue={storyCategory}
              onChange={(e) => setStoryCategory(e.currentTarget.value)}
            />

            <TextArea
              placeholder="Adicione o conteúdo"
              onBlur={validateForm}
              value={storyContent}
              onChange={(e) => setStoryContent(e.currentTarget.value)}
            />

            <input
              type="date"
              value={storyDate}
              onChange={(e) => setStoryDate(e.target.value)}
            ></input>

            <Button buttonActive={active} onClick={handleClick}>
              Publicar
            </Button>
          </form>

          {sucessModal && (
            <Modal title="Story publicado!" onClickConfirm={backToStories}>
              <CheckCircle width={40} height={40} color={theme.colors.yellow} />
            </Modal>
          )}
          {errorModal && (
            <Modal
              title="Oops. Há algo errado."
              onClickCancel={() => setErrorModal(false)}
            >
              <AlertCircle width={40} height={40} color={theme.colors.pink} />
            </Modal>
          )}
        </MainContent__container>
      </MainContent__section>
    </>
  );
}
