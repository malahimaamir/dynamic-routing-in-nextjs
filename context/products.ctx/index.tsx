"use client";

import { createContext, ReactNode, useState } from "react";

interface ProductsContextType {
  isSsr: boolean;
}

export const productsCtx = createContext<ProductsContextType>({
  isSsr: false,
});

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSsr] = useState(true); // Always true in client-side rendering.

  return (
    <productsCtx.Provider value={{ isSsr }}>{children}</productsCtx.Provider>
  );
};

export default ProductsProvider;
