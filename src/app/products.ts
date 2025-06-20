export interface IProduct {
    id: number;
    description: string;
    price: number;
    descriptionPrice: string;
    discount?: number;
    details?: string;
    category: string;
    stockQtd: number;
    image: string;
}

export interface IcartProduct extends IProduct {
    qtd: number;
}

export const products: IProduct[] = [
  { id: 1, description: "Lavanda", price: 58.00, details: "um produto muito bom que serve para muitas coisas de saúde que são incrivelmente importantes para a sobrevivência do indivídui. Estudos comprovam que sem saúde o infeliz vive muito menos que uma pessoa com boa saúde", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 130 },
  { id: 2, description: "Hortelã", price: 45.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 90 },
  { id: 3, description: "Alecrim", price: 52.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 75 },
  { id: 4, description: "Manjericão", price: 48.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 60 },
  { id: 5, description: "Sálvia", price: 50.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 40 },
  { id: 6, description: "Tomilho", price: 47.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 55 },
  { id: 7, description: "Cebolinha", price: 42.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 80 },
  { id: 8, description: "Coentro", price: 44.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 65 },
  { id: 9, description: "Cacto", price: 60.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 50 },
  { id: 10, description: "Suculenta", price: 55.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 70 },
  { id: 11, description: "Orquídea", price: 90.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 20 },
  { id: 12, description: "Bordo Japonês", price: 150.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 10 },
  { id: 13, description: "Cipreste", price: 85.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 30 },
  { id: 14, description: "Bambu", price: 70.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 25 },
  { id: 15, description: "Palmeira Areca", price: 120.00, details: "um produto muito bom", category: "planta", descriptionPrice: "À vista no PIX", image: "/assets/lavanda.jpeg", stockQtd: 15 }
];

