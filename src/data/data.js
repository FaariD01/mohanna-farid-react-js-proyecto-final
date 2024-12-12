const products = [

    {
      id: "ABC123",
      name: "Remera Verde",
      description: "lorem aokdhaihdakjdhakjdhajkhd",
      image: "https://http2.mlstatic.com/D_NQ_NP_605633-MLA76948949989_062024-O.webp",
      price: 500,
      stock: 10,
      category: "remera",
      
    },

    {
      id: "CDF456",
      name: "Pantalon Adidas",
      description: "",
      image: "https://http2.mlstatic.com/D_NQ_NP_703831-MLA73220805964_122023-O.webp",
      price: 300,
      stock: 4,
      category: "pantalon",
      
    },
    {
      id: "GHI789",
      name: "Zapatillas Nike",
      description: "",
      image: "https://http2.mlstatic.com/D_NQ_NP_758560-MLA74797600925_022024-O.webp", // "/img/nombreImagen.jpg" -> si esta en local
      price: 600,
      stock: 2,
      category: "zapatilla",
      
    }


  ];

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      //simulamos un retraso de red de 2 segs
      setTimeout(() => {
        resolve(products)
      }, 500); 
      
      })
  }

  export { getProducts }