import React from "react";
import { IoMdDownload } from "react-icons/io";
import { Button } from "../components/atoms/button";
import { View } from "../components/organisms/view";
import { NavBar } from "../components/organisms/navbar";
import { HeadingOne } from "../components/atoms/heading-one";
import { SearchBar } from "../components/atoms/search-bar";

export default function Lista() {
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
      </View>
    </>
  );
}
