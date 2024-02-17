import { HeadingOne } from "../components/atoms/heading-one";
import { SearchBar } from "../components/atoms/search-bar";
import { KBCard } from "../components/organisms/kb-card";
import { NavBar } from "../components/organisms/navbar";
import { Section } from "../components/organisms/section";
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
        <Section>
          <div className="bg-slate_300 flex-1 flex px-20 py-10 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-slate_900">Aguardando confirmação</h3>
                <span className="text-danger/40 bg-danger/20 rounded-full h-6 w-6 items-center flex justify-center font-bold text-[12px]">5</span>
              </div>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-slate_900">Em preparo</h3>
                <span className="text-danger/40 bg-danger/20 rounded-full h-6 w-6 items-center flex justify-center font-bold text-[12px]">5</span>
              </div>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-slate_900">Pronto</h3>
                <span className="text-danger/40 bg-danger/20 rounded-full h-6 w-6 items-center flex justify-center font-bold text-[12px]">5</span>
              </div>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-slate_900">Entregue</h3>
                <span className="text-danger/40 bg-danger/20 rounded-full h-6 w-6 items-center flex justify-center font-bold text-[12px]">5</span>
              </div>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
              <KBCard title="Tapioca recheada" descricao="Recheio de carne" mesa="MESA 01" id="P0120"/>
            </div>
          </div>
        </Section>
    </View>
  );
}
