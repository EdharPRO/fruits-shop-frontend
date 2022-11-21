import { createContext, useState } from 'react';

export const PurchasesContext = createContext();

export const PurchasesProvider = ({ children }) => {
  const [ purchases, setPurchases ] = useState([]);

  const removePurchase = (purchaseId) => {
    const newPurchases = purchases.filter(({ id }) => id !== purchaseId);

    setPurchases(newPurchases);
  };

  const remAllPurchases = () => {
    setPurchases([]);
  };

  const buyProduct = (product) => {
    setPurchases((purchases) => {
      const existedPurchase = purchases.find(({ product: { id } }) => product.id === id);

      const newPurchase = {
        id: existedPurchase?.id || Date.now(),
        product,
        count: 1 + (existedPurchase?.count || 0)
      };

      // return existedPurchase
      //     ? purchases.map((purchase) => purchase.id === existedPurchase.id ? newPurchase : purchase)
      //     : purchases.concat(newPurchase);


      if (!existedPurchase) {
        return purchases.concat(newPurchase);
      } else {
        return purchases.map((purchase) => {
          const isExistedPurchase = existedPurchase.id === purchase.id;

          if (!isExistedPurchase) {
            return purchase;
          } else {
            return newPurchase;
          }
        });
      }
    });
  };

  const providerValue = {
    purchases,

    buyProduct,
    removePurchase,

    remAllPurchases
  };

  return (
    <PurchasesContext.Provider value={providerValue}>
      {children}
    </PurchasesContext.Provider>
  );
};
