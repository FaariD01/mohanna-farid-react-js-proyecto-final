const products = [

    {
      id: "PROCE_AMD_1",
      name: "Procesador - AMD",
      description: "Procesador AMD Ryzen 5 5600 4.4GHz Turbo + Wraith Stealth Cooler",
      image: "/img/procesador_amd.jpg",
      price: 200,
      stock: 10,
      category: "procesadores",
      
    },

    {
      id: "PROCE_INTEL_1",
      name: "Procesador - Intel",
      description: "Procesador Intel Core i7 12700K 5.0GHz Turbo Socket 1700 Alder Lake",
      image: "/img/procesador_intel.jpg",
      price: 400,
      stock: 4,
      category: "procesadores",
      
    },
    {
      id: "PLACA_AMD_1",
      name: "Placa de Video - AMD",
      description: "Placa de Video ASUS Dual Radeon RX 6600 8GB GDDR6 V2",
      image: "/img/placa_de_video_amd.jpg", // "/img/nombreImagen.jpg" -> si esta en local
      price: 350,
      stock: 4,
      category: "placa_de_video",
      
    },
    {
      id: "PLACA_NVIDIA_1",
      name: "Placa de Video - NVIDIA",
      description: "Placa de Video ASUS Dual GeForce RTX 3060 12GB GDDR6 OC V2 ",
      image: "/img/placa_de_video_nvidia.jpg", // "/img/nombreImagen.jpg" -> si esta en local
      price: 400,
      stock: 2,
      category: "placa_de_video",
      
    },
    {
      id: "MOUSE_LOGI_1",
      name: "Mouse Logitech",
      description: "Mouse Logitech G PRO X Wireless Superlight White 25K ",
      image: "/img/mouse_logi_proxsuperlight.jpg", // "/img/nombreImagen.jpg" -> si esta en local
      price: 80,
      stock: 11,
      category: "mouse",
      
    },
    {
      id: "MOUSE_RAZER_1",
      name: "Mouse Logitech",
      description: "Mouse Razer Viper V2 PRO Wireless 2.4Ghz Multi-Dispositivo Black 30K DPI 58g",
      image: "/img/mouse_razer_viper.jpg", // "/img/nombreImagen.jpg" -> si esta en local
      price: 130,
      stock: 11,
      category: "mouse",
      
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