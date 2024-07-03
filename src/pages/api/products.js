// src/pages/api/products.js
const products = [
  {
    id: 1,
    title: "Notebook Exemplo",
    description: "Este é um notebook fictício para demonstração.",
    price: 4000.0,
    initialPrice: 5000.0,
    imageUrl: "../../../public/images/computagor.jpg", // Caminho para sua imagem de exemplo
  },
  {
    id: 2,
    title: "Mouse Gamer",
    description: "Mouse ergonômico para jogadores exigentes.",
    price: 150.0,
    imageUrl: "../../../public/images/computagor.jpg", // Caminho para outra imagem de exemplo
  },
  // Adicione mais produtos conforme necessário
];

export default (req, res) => {
  // Simulando um atraso para simular uma requisição assíncrona
  setTimeout(() => {
    res.status(200).json(products);
  }, 1000); // Simula um tempo de resposta de 1 segundo
};
