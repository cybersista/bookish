import { useState } from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ product, onIncrease, onDecrease, onDelete }) => {
  const { id, image, name, price, quantity } = product;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrease = () => {
    setItemQuantity(itemQuantity + 1);
    onIncrease(id);
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      onDecrease(id);
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr className="border-b-2 py-4">
      <td className="px-4 py-2">
        <img src={image} alt={name} className="w-30 h-25 object-cover rounded" />
      </td>
      <td className="px-4 py-2">
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-gray-500">Harga: Rp. {price}</span>
        </div>
      </td>
      <td className="px-4 py-2">
      <div className="flex items-center justify-center max-w-[100px] h-full border text-primary font-medium">
        <button className="px-4 py-2 mr-2" onClick={handleDecrease}>
          <span className="text-lg font-bold">-</span>
        </button>
        <span className="text-lg font-semibold">{itemQuantity}</span>
        <button className="px-4 py-2 ml-2" onClick={handleIncrease}>
          <span className="text-lg font-bold">+</span>
        </button>
      </div>
      </td>
      <td className="px-3 py-2 text-left">
        <span className="font-semibold">Rp. {price * itemQuantity}</span>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center">
          <button className="mr-2 text-red-500 border border-red-500 py-1 px-3 rounded" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const Cart = ({ cart, onCheckout, onUpdateCart }) => {
  
  const handleDelete = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    onUpdateCart(updatedCart);
    console.log('Item deleted:', productId);
  };

  return (
    <div className="min-h-screen max-w-3xl mx-auto my-8 p-8 border rounded">
      <h1 className="text-2xl font-semibold mb-4">Keranjang</h1>
      <table className="w-full">
        <thead>
          <tr className="border-b-2">
            <th className="px-4 py-2 text-left" >Produk</th>
            <th className="px-4 py-2 text-left" >Nama</th>
            <th className="px-4 py-2 text-left" >Jumlah</th>
            <th className="px-3 py-2 text-left" >Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onIncrease={() => {}}
              onDecrease={() => {}}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      
      <div className="mt-10 flex justify-end">
        <button className="bg-[#677C52] text-white py-2 px-4 rounded" onClick={onCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCheckout: PropTypes.func.isRequired,
  onUpdateCart: PropTypes.func.isRequired,
};

const Keranjang = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Novel Kata',
      image: 'https://via.placeholder.com/150',
      price: 89000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Novel Bulan',
      image: 'https://via.placeholder.com/150',
      price: 90000,
      quantity: 3,
    },
    {
      id: 3,
      name: 'Novel Bumi',
      image: 'https://via.placeholder.com/150',
      price: 85000,
      quantity: 1,
    },
    // Add more products as needed
  ]);

  const handleCheckout = () => {
    console.log('Proses checkout...');
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <Cart cart={cart} onCheckout={handleCheckout} onUpdateCart={updateCart} />
    </div>
  );
};

export default Keranjang;
