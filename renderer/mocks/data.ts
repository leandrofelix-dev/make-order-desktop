import { randomUUID } from "crypto"

const menu = [
    {
        id: randomUUID,
        nome: "Risoto de Cogumelos",
        descricao: "Arroz arbóreo cozido lentamente com cogumelos frescos, cebola e queijo parmesão.",
        quantidade: 2
    },
    {
        id: randomUUID,
        nome: "Salmão Grelhado",
        descricao: "Filé de salmão grelhado, regado com molho de limão e ervas. Acompanha purê de batatas.",
        quantidade: 1
    },
    {
        id: randomUUID,
        nome: "Pizza Margherita",
        descricao: "Pizza tradicional com molho de tomate, mussarela fresca, tomate e manjericão.",
        quantidade: 3
    },
    {
        id: randomUUID,
        nome: "Tacos de Carne Asada",
        descricao: "Tortilhas de milho recheadas com carne grelhada, cebola, coentro e molho especial.",
        quantidade: 2
    },
    {
        id: randomUUID,
        nome: "Massa Alfredo com Camarões",
        descricao: "Fettuccine coberto com molho Alfredo cremoso e camarões suculentos.",
        quantidade: 1
    },
    {
        id: randomUUID,
        nome: "Hambúrguer Clássico",
        descricao: "Hambúrguer de carne angus, queijo cheddar, alface, tomate e maionese especial.",
        quantidade: 2
    },
    {
        id: randomUUID,
        nome: "Salada de Quinoa",
        descricao: "Quinoa cozida, espinafre, abacate, tomate cereja e molho de limão.",
        quantidade: 2
    },
    {
        id: randomUUID,
        nome: "Frango ao Curry",
        descricao: "Peito de frango cozido em um delicioso molho de curry, servido com arroz basmati.",
        quantidade: 1
    },
    {
        id: randomUUID,
        nome: "Tiramisù",
        descricao: "Sobremesa italiana clássica com camadas de biscoitos, café, queijo mascarpone e cacau.",
        quantidade: 3
    },
    {
        id: randomUUID,
        nome: "Burrito Vegetariano",
        descricao: "Burrito recheado com feijão preto, arroz, legumes, queijo e guacamole.",
        quantidade: 2
    },
];

export { menu }