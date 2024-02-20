import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { Button } from "../components/atoms/button";
import { View } from "../components/organisms/view";
import { NavBar } from "../components/organisms/navbar";
import { HeadingOne } from "../components/atoms/heading-one";
import { SearchBar } from "../components/atoms/search-bar";
import { Section } from "../components/organisms/section";
import { Card } from "../components/organisms/card";
import { ButtonList } from "../components/molecules/button-list";
import { FaPlusCircle } from "react-icons/fa";
import { HeadingThree } from "../components/atoms/heading-three";
import { HeadingFour } from "../components/atoms/heading-four";
import { OrderItem } from "../components/molecules/order-item ";
import { pedido } from "../mocks/data";
import { RegisterModal } from "../components/molecules/register-modal";

export default function Lista() {

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
          <HeadingOne>Lista de pedidos</HeadingOne>
          <div className="w-64">
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center justify-between" >
          <ButtonList />
          <div className="w-64">
            <Button
              variant="primary"
              action={handleOpenModal}
            >
              <FaPlusCircle />
              Registrar pedido
            </Button>
            {openRegisterModal && (
              <RegisterModal title="Registrar pedido" isOpen={openRegisterModal} onClose={handleCloseModal} apiURL="https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/pedidos/create" />
            )}
          </div>
        </div>
        <Section>
          <Card>
            <div className="flex items-center justify-stretch font-semibold p-2 mb-2 gap-14">
              <span>Item</span>
              <span>Atendente</span>
              <span>Data</span>
              <span>Código</span>
              <span>Preço do prato</span>
              <span>Mesa</span>
              <span>Observação</span>
            </div>
            {pedido.map((item) => (
              <OrderItem item={item.item} atendente={item.atendente} data={item.data} codigo={item.codigo} preco={item.preco} mesa={item.mesa} observacao={item.observacao}></OrderItem>
            ))}
          </Card>
        </Section>
      </View>
    </>
  );
}
