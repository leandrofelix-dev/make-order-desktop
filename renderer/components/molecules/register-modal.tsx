import axios from 'axios';
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from 'react';
import { Button } from '../atoms/button';
import { HeadingOne } from '../atoms/heading-one';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiURL: string;
  title: string;
}

interface Item {
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
}

function RegisterModal({ isOpen, onClose, apiURL, title }: RegisterModalProps) {
  const [item, setItem] = useState<Item>({
    nome: '',
    preco: 0,
    quantidade: 0,
    descricao: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }))
  };

  async function handleAddItem() {
    try {
      // Substitua a URL abaixo pela sua API
      const response = await axios.post(apiURL, item);

      // Lógica adicional após o registro bem-sucedido (ex: exibir mensagem, recarregar dados, etc.)
      console.log('Item registrado com sucesso!', response.data);

      // Feche o modal
      onClose();
    } catch (error) {
      // Lógica de tratamento de erro (ex: exibir mensagem de erro)
      console.error('Erro ao registrar item:', error);
    }
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-slate_100 p-8  rounded-xl flex flex-col shadow-md w-full h-full max-w-[644px] max-h-[500px]">

          <div className="flex items-center justify-between mr-8">
            <HeadingOne>{title}</HeadingOne>
            <IoIosCloseCircle className="text-3xl transition-all ease-in-out text-slate_900 hover:text-danger/90 cursor-pointer" onClick={onClose} />
          </div>

          <div className="ml-8 mr-8">
            <label className="font-semibold flex mb-2">Item</label>
            <input className="bg-slate_50 border-2 border-slate_200 h-8  text-sm placeholder:text-slate_500 w-full" type="text" name="nome" value={item.nome} onChange={handleInputChange} />

            <div className="flex justify-between">
              <div>
                <label className="font-semibold flex mb-2">Preço</label>
                <input
                  className="bg-slate_50 border-2 border-slate_200 h-8  text-sm placeholder:text-slate_500"
                  type="number"
                  name="preco"
                  value={item.preco}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="font-semibold flex mb-2">Quantidade</label>
                <input className="bg-slate_50 border-2 border-slate_200 h-8  text-sm placeholder:text-slate_500" type="number" name="quantidade" value={item.quantidade} onChange={handleInputChange} />
              </div>
            </div>

            <label className="font-semibold flex mb-2">Observações</label>
            <input className="bg-slate_50 border-2 border-slate_200 text-sm placeholder:text-slate_500 w-full h-10" type="text" name="descricao" value={item.descricao} onChange={handleInputChange} />

            <Button variant="primary" action={handleAddItem}>
              Registrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RegisterModal };
