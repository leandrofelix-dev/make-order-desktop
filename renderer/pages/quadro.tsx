import { HeadingOne } from "../components/atoms/heading-one";
import { SearchBar } from "../components/atoms/search-bar";
import { NavBar } from "../components/organisms/navbar";
import { View } from "../components/organisms/view";

export default function Quadro() {
  return (
    <View>
      <NavBar />
      <div className="flex items-center justify-between">
        <HeadingOne>Quadro de pedidos</HeadingOne>
        <div className="w-64">
          <SearchBar />
        </div>
      </div>
    </View>
  );
}
