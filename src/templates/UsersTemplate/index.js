import React, { useState, useEffect } from "react";
import MainContentHeader from "../../components/MainContentHeader";
import {
  MainContent__container,
  MainContent__section,
} from "../../styles/global";
import { postUser } from "../../services/requests/users";

import TextField from "../../components/TextField";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Buttons";
import CategorySelect from "../../components/CategorySelect";
import { Type, CheckCircle, AlertCircle, Mail } from "react-feather";
import theme from "../../styles/theme";
import Modal from "../../components/Modal";
import { useRouter } from "next/router";
import Select from "../../components/Select";

export default function UsersTemplate() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCategory, setUserCategory] = useState("");
  const [profileType, setProfileType] = useState("customer");
  const [active, isActive] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const optionsList = [
    {
      option: "Customer",
      value: "customer",
    },
    {
      option: "Admin",
      value: "admin",
    },
  ];

  async function createUser(e) {
    e.preventDefault();
    const newUser = await postUser(
      username,
      name,
      userEmail,
      userCategory,
      profileType
    );

    if (newUser.status === 200) {
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
    if (name?.length >= 3 && userEmail?.length > 0 && userCategory !== "") {
      isActive(true);
    } else {
      isActive(false);
    }
  }

  function handleChange(e) {
    setName(e.currentTarget.value);
    setUsername(e.currentTarget.value.toLowerCase().replace(" ", ""));
  }

  function backToUsers() {
    router.push("/users");
  }

  function handleChangeCategory(e) {
    setUserCategory({
      name: e.options[e.selectedIndex].text,
      slug: e.options[e.selectedIndex].value,
    });
  }

  useEffect(() => {
    validateForm();
  }, [name, userEmail, userCategory]);

  return (
    <>
      <Sidebar />
      <MainContent__section>
        <MainContent__container>
          <MainContentHeader data={"Novo Usuário"} />
          <form>
            <TextField
              value={name}
              placeholder="Nome e Sobrenome"
              onBlur={validateForm}
              onChange={(e) => handleChange(e)}
            >
              <Type width={24} color={theme.colors.gray} />
            </TextField>

            <TextField
              value={userEmail}
              placeholder="Email"
              onBlur={validateForm}
              onChange={(e) => setUserEmail(e.currentTarget.value)}
            >
              <Mail width={24} color={theme.colors.gray} />
            </TextField>

            <CategorySelect
              defaultValue={userCategory.slug}
              onChange={(e) => handleChangeCategory(e.currentTarget)}
            />

            <Select
              onChange={(e) => setProfileType(e.currentTarget.value)}
              defaultValue={profileType}
              defaultOption="Escolha o perfil do usuário"
              optionsList={optionsList}
            />

            <Button buttonActive={active} onClick={createUser}>
              Publicar
            </Button>
          </form>

          {sucessModal && (
            <Modal title="Usuário Criado!" onClickConfirm={backToUsers}>
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
