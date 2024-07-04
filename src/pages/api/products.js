const products = [
  {
    id: 1,
    title: "Notebook 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2999.99,
    initialPrice: 3500.99,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 2,
    title: "Notebook 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2900.99,
    initialPrice: 3222.99,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 3,
    title: "Notebook 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 3950.99,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 4,
    title: "Notebook 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 3900.99,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 5,
    title: "Notebook 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2539.99,
    initialPrice: 2990.99,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 6,
    title: "Notebook 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 3339.99,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 7,
    title: "Notebook 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2539.99,
    imageUrl: "/images/notebook.jpg",
  },
  {
    id: 8,
    title: "Notebook 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4999.99,
    initialPrice: 5520.99,
    imageUrl: "/images/notebook.jpg",
  },
];

export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json(products);
  }, 500);
}
