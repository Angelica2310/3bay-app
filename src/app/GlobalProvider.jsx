import { CartProductProvider } from "./context/CartContext";

export function GlobalProvider({ children }) {
  return <CartProductProvider>{children}</CartProductProvider>;
}
