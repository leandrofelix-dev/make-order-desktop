import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "../components/atoms/button";
import { View } from "../components/organisms/view";
import { NavBar } from "../components/organisms/navbar";
import { Card } from "../components/organisms/card";
import { HeadingOne } from "../components/atoms/heading-one";
import { HeadingTwo } from "../components/atoms/heading-two";
import { MenuItem } from "../components/molecules/menu-item";
import { menu } from "../mocks/data";
import { HeadingThree } from "../components/atoms/heading-three";
import { ProfileCard } from "../components/molecules/profile_card";
import { HeadingFour } from "../components/atoms/heading-four";
import { Section } from "../components/organisms/section";
import { Box } from "../components/organisms/box";
import { BestDishes } from "../components/molecules/best-dishes";
import { EditModal } from "../components/molecules/edit-modal";
import { RegisterModal } from "../components/molecules/register-modal";

export default function HomePage() {

  const [openModal, setOpenModal] = useState(false)
  const [openRegisterModal, setOpenRegisterModal] = useState(false)

  const handleOpenModal = () => {
    setOpenRegisterModal(true);
  };

  const handleCloseModal = () => {
    setOpenRegisterModal(false);
  };


  return (
    <>
      <View>
        <NavBar />
        <div className="flex items-center justify-between">
          <HeadingOne>Dashboard</HeadingOne>
          <div className="w-64">
            <Button
              variant="primary"
              action={() => alert("relatório gerado")}
            >
              Gerar relatório
              <IoMdDownload size={22} />
            </Button>
          </div>
        </div>
        <Section>
          <Card>
            <div className="flex items-center justify-between">
              <HeadingTwo>Cardápio de hoje</HeadingTwo>
              <div className="w-40">
                <Button
                  variant="primary"
                  action={handleOpenModal}
                >
                  <FaPlusCircle />
                  Registrar item
                </Button>

                {openRegisterModal && (
                  <RegisterModal title="Registrar Item" isOpen={openRegisterModal} onClose={handleCloseModal} apiURL="https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/itens/create" />
                )}

              </div>
            </div>
            <div>
              <div className="font-semibold flex mb-2">
                <div className="w-[calc(50%+16px)]">
                  <span>Item</span>
                </div>
                <div>
                  <span>Ingredientes</span>
                </div>
              </div>
              {menu.map((prato) => (
                <MenuItem prato={prato.nome} ingredientes={prato.descricao} />
              ))}
            </div>
          </Card>
          <Box>
            <Card>
              <HeadingThree>Top atendentes</HeadingThree>
              <ProfileCard
                name={"Amanda Souza"}
                role={"Creative Director"}
              ></ProfileCard>
              <ProfileCard
                name={"Leandro Félix"}
                role={"Creative Director"}
              ></ProfileCard>
              <ProfileCard
                name={"Bruno Oliveira"}
                role={"Creative Director"}
              ></ProfileCard>
            </Card>
            <Card>
              <HeadingFour>Pratos mais vendidos</HeadingFour>
              <BestDishes
                name={"Macarrão"}
                role={"123 Pratos"}
              ></BestDishes>
              <BestDishes
                name={"Arroz "}
                role={"200 Pratos"}
              ></BestDishes>
              <BestDishes
                name={"Lasanha"}
                role={"300 Pratos"}
              ></BestDishes>
            </Card>
          </Box>
        </Section>
      </View>
    </>
  );
}
