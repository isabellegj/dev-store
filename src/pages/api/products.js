const products = [
  {
    id: 1,
    title: "Produto 1",
    description: "Descrição do Produto 1",
    price: 19.99,
    initialPrice: 20,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 2,
    title: "Produto 2",
    description: "Descrição do Produto 2",
    price: 29.99,
    initialPrice: 20,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 3,
    title: "Produto 3",
    description: "Descrição do Produto 3",
    price: 39.99,
    initialPrice: 20,
    imageUrl: "/images/notebook.jpg",
  },
];

export default function handler(req, res) {
  // Simulando um pequeno atraso de 500ms para simular uma requisição assíncrona
  setTimeout(() => {
    res.status(200).json(products);
  }, 500);
}
