import Product from "./components/Product";

function App() {
  const produtos = [
    {
      productSku: "b8one-1",
      productName:
        "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      productImage: "/imagens/monitorodyssey.png",
      productBasePrice: 2813.0,
      productBestPrice: 2599.0,
      isFavorite: false,
      installments: 10,
    },
    {
      productSku: "b8one-2",
      productName:
        "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      productImage: "/imagens/monitorodyssey.png",
      productBasePrice: 2813.0,
      productBestPrice: 2599.0,
      isFavorite: false,
      installments: 10,
    },
  ];

  return (
    <div className="App">
      {produtos.map(
        ({
          productSku,
          productName,
          productImage,
          productBasePrice,
          productBestPrice,
          isFavorite,
          installments,
        }) => (
          <Product
            key={productSku}
            productName={productName}
            productImage={productImage}
            productBasePrice={productBasePrice}
            productBestPrice={productBestPrice}
            isFavorite={isFavorite}
            installments={installments}
          />
        )
      )}
    </div>
  );
}

export default App;
