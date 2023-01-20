import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import UserContext from "./context/UserContext";
import CartProvider from "./context/CartContext";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <UserContext>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserContext>
  );
}

export default App;
