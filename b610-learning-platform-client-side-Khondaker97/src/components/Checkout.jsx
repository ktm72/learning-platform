import React, { useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const [dark] = useOutletContext();
  const { cart, setCart, userLog } = useContext(cartContext);
  const navigate = useNavigate();
  const handleConfirm = () => {
    if (cart.length > 0) {
      toast.success("Successfull Purchage!", {
        position: toast.POSITION.TOP_CENTER,
      });
      userLog["purchage"] = cart;
    }
    setTimeout(() => {
      setCart([]);
      navigate("/home");
    }, 1000);
  };
  const handleCancel = () => {
    toast.error("Cancelled!", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      setCart([]);
    }, 1000);
  };
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <div className="flex flex-col w-[90%] mx-auto pt-[4.5rem]">
        <h1
          className={`${
            dark ? "text-white" : "text-gray-500"
          } text-3xl font-semibold capitalize lg:text-5xl dark:text-white py-4`}
        >
          Checkout
        </h1>
        <section className="flex flex-col-reverse gap-2 md:flex-row h-full">
          <div className="flex-[3] w-full h-full">
            {cart && cart?.length === 0 ? (
              <h3
                className={`${dark ? "text-white" : "text-gray-600"} text-2xl`}
              >
                No course in the cart
              </h3>
            ) : (
              <div className="grid md:grid-cols-2 w-full gap-1">
                {cart?.map((item, index) => (
                  <div
                    key={`${index}z`}
                    className="flex flex-col rounded-md overflow-hidden border border-slate-500 bg-white shadow-gray-500 h-[280px]"
                  >
                    <div className="rounded-tl-md overflow-hidden w-full h-[180px]">
                      <img
                        src={item.img}
                        alt={item.topic}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-2 text-gray-500">
                      <h1 className="text-3xl">{item.topic}</h1>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col w-full h-auto bg-[#BAD1C2] p-4 rounded">
            <h3 className="text-2xl font-bold pb-4">Are you sure?</h3>
            <div className="flex gap-1 w-full">
              <button
                onClick={handleConfirm}
                className="flex-1 text-xl py-4 text-center rounded-md bg-green-500"
              >
                confirm
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 text-xl text-center py-4 rounded-md bg-rose-500"
              >
                cancel
              </button>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default Checkout;
