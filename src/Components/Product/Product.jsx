import React, { useState, useRef } from 'react';
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  User,
  Phone,
  MapPin,
  CheckCircle,
  Tag,
  Package,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const initialProducts = {
  Panjabi: [
    {
      id: 1,
      name: 'Classic White Panjabi',
      price: 1200,
      image:
        'https://www.yellowclothing.net/cdn/shop/files/DSC9247_533x.jpg?v=1756902299',
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 2,
      name: 'Embroidered Blue Panjabi',
      price: 1500,
      image: 'https://cdn.bdstall.com/product-image/giant_105545.jpg',
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 3,
      name: 'Traditional Black Panjabi',
      price: 1300,
      image:
        'https://media.e-valy.com/cms/products/images/48678bca-d8c5-40a6-9cc3-ea283123ef17',
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 4,
      name: 'Festival Red Panjabi',
      price: 1600,
      image:
        'https://desire.com.bd/wp-content/uploads/2025/03/SAP5715-scaled.jpg',
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 5,
      name: 'Designer Gray Panjabi',
      price: 1400,
      image:
        'https://www.craftyle.com/cdn/shop/files/hand-block-printed-cotton-panjabi-for-men-applique-with-embroidery-783.webp?v=1757099598&width=1100',
      sizes: ['S', 'M', 'L', 'XL'],
    },
  ],
  Shari: [
    {
      id: 6,
      name: 'Silk Jamdani Shari',
      price: 2500,
      image:
        'https://cdn.sareeka.com/image/cache/data2021/net-red-designer-saree-192275-1000x1375.jpg',
      sizes: [], // Empty array for Shari
    },
    {
      id: 7,
      name: 'Cotton Banarasi Shari',
      price: 2800,
      image:
        'https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/b/a/banarasi-pure-katan-silk-saree-in-wine-v1-shfa1592.jpg',
      sizes: [],
    },
    {
      id: 8,
      name: 'Wedding Shari',
      price: 3000,
      image:
        'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/l/e/leheriya-printed-satin-silk-saree-in-fuchsia-v1-sws6981.jpg',
      sizes: [],
    },
    {
      id: 9,
      name: 'Traditional Silk Shari',
      price: 2700,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_qPVCRVLuTkuPVJj9OAsvYdpMXIUxY13FA&s',
      sizes: [],
    },
    {
      id: 10,
      name: 'Designer Printed Shari',
      price: 2900,
      image:
        'https://assets0.mirraw.com/images/12948304/image_zoom.jpeg?1731935642',
      sizes: [],
    },
  ],
};

function ProductPage() {
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    number: '',
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({}); // Store selected size for each product
  const checkoutRef = useRef(null);

  const addToCart = product => {
    // For Panjabi, check if size is selected
    if (product.sizes.length > 0) {
      const selectedSize = selectedSizes[product.id];
      if (!selectedSize) {
        alert('Please select a size for this Panjabi');
        return;
      }
    }

    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const newItem = {
        ...product,
        quantity: 1,
        size: product.sizes.length > 0 ? selectedSizes[product.id] : null,
      };
      setCart([...cart, newItem]);
    }

    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart(
      cart.map(item => (item.id === id ? { ...item, quantity: qty } : item)),
    );
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size,
    }));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleCustomerChange = e => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = () => {
    if (!customerInfo.name || !customerInfo.number || !customerInfo.address) {
      alert('Please fill your Name, Phone, and Address');
      return;
    }

    if (cart.length === 0) {
      alert('Cart is empty! Please select products.');
      return;
    }

    const formData = cart.map(item => ({
      Name: customerInfo.name,
      Number: customerInfo.number,
      Address: customerInfo.address,
      Product: item.name,
      ProductPrice: item.price,
      Quantity: item.quantity,
      Size: item.size || 'N/A',
    }));
    console.log(formData);

    // Simulate API call
    setTimeout(() => {
      setOrderPlaced(true);
      setTimeout(() => {
        setOrderPlaced(false);
        setCart([]);
        setCustomerInfo({ name: '', number: '', address: '' });
        setSelectedSizes({});
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen  pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#5a189a] to-[#9d4edd] bg-clip-text text-transparent mb-4">
            Our Premium Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Traditional Wear, Modern Style
          </p>

          {/* Cart Indicator */}
          {cart.length > 0 && (
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mt-4">
              <ShoppingCart className="text-[#5a189a]" size={20} />
              <span className="font-semibold text-[#5a189a]">
                {cart.length} items
              </span>
              <span className="text-gray-400">•</span>
              <span className="font-bold text-[#9d4edd]">৳ {totalPrice}</span>
            </div>
          )}
        </div>

        {/* Success Message */}
        {orderPlaced && (
          <div className="fixed top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-slide-in">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} />
              <div>
                <p className="font-bold">Order Placed Successfully!</p>
                <p className="text-sm opacity-90">We'll contact you shortly.</p>
              </div>
            </div>
          </div>
        )}

        {/* Product Categories */}
        {Object.keys(initialProducts).map(category => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-md bg-gradient-to-r from-[#5a189a] to-[#9d4edd]">
                <Package className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                {category} Collection
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {initialProducts[category].map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
                >
                  {/* Product Image */}
                  <div className="h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-[#c8b6ff]/20 to-[#f8edeb]/20 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      /* object-cover → object-contain */
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Tag className="text-[#9d4edd]" size={12} />
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#5a189a]">
                          ৳ {product.price}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        /piece
                      </span>
                    </div>

                    {/* Fixed Height Container for Size Selection */}
                    {product.sizes.length > 0 && (
                      <div className="mb-3 sm:mb-4">
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Select Size
                        </label>
                        <div className="grid grid-cols-4 gap-1 mb-1">
                          {product.sizes.map(size => (
                            <button
                              key={size}
                              onClick={() => handleSizeSelect(product.id, size)}
                              className={`py-1.5 rounded text-xs font-medium transition-all ${
                                selectedSizes[product.id] === size
                                  ? 'bg-gradient-to-r from-[#5a189a] to-[#9d4edd] text-white shadow-sm'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                        {/* Fixed height error message container */}
                        <div className="h-5">
                          {!selectedSizes[product.id] && (
                            <p className="text-xs text-red-500">Select size</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1"></div>

                    {/* Add to Cart Button - Always at bottom */}
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-gradient-to-r from-[#5a189a] to-[#9d4edd] text-white font-semibold py-2 sm:py-3 rounded-md hover:from-[#6a299a] hover:to-[#ad5eed] transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                      disabled={
                        product.sizes.length > 0 && !selectedSizes[product.id]
                      }
                    >
                      <ShoppingCart size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Checkout Section */}
        <div
          ref={checkoutRef}
          className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#5a189a] to-[#9d4edd] p-4 sm:p-6 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 sm:gap-3">
              <ShoppingCart size={20} />
              Checkout
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-1 sm:mt-2">
              Complete your purchase
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            {/* Cart Items */}
            {cart.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <ShoppingCart
                  className="mx-auto text-gray-300 mb-3 sm:mb-4"
                  size={48}
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 mb-1 sm:mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Add some products to get started!
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Your Order ({cart.length}{' '}
                    {cart.length === 1 ? 'item' : 'items'})
                  </h3>

                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start sm:items-center gap-3">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#c8b6ff]/20 to-[#f8edeb]/20">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-800 text-sm sm:text-base line-clamp-1">
                              {item.name}
                            </h4>
                            {item.size && (
                              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                                Size:{' '}
                                <span className="font-medium">{item.size}</span>
                              </p>
                            )}
                            <p className="text-[#5a189a] font-bold text-sm sm:text-base mt-1">
                              ৳ {item.price} × {item.quantity} = ৳{' '}
                              {item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1 sm:px-3 sm:py-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-600 hover:text-[#9d4edd] transition-colors p-1"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-bold text-gray-800 text-sm sm:text-base min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-600 hover:text-[#9d4edd] transition-colors p-1"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white hover:shadow-md transition-shadow flex-shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Customer Info Form */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Customer Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
                        <User size={16} />
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 focus:outline-none focus:border-[#9d4edd] focus:ring-2 focus:ring-[#9d4edd]/20 transition-all text-sm sm:text-base"
                        value={customerInfo.name}
                        onChange={handleCustomerChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
                        <Phone size={16} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="number"
                        placeholder="01XXXXXXXXX"
                        className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 focus:outline-none focus:border-[#9d4edd] focus:ring-2 focus:ring-[#9d4edd]/20 transition-all text-sm sm:text-base"
                        value={customerInfo.number}
                        onChange={handleCustomerChange}
                      />
                    </div>

                    <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                      <label className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
                        <MapPin size={16} />
                        Delivery Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Full address with area"
                        className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 focus:outline-none focus:border-[#9d4edd] focus:ring-2 focus:ring-[#9d4edd]/20 transition-all text-sm sm:text-base"
                        value={customerInfo.address}
                        onChange={handleCustomerChange}
                      />
                    </div>
                  </div>
                </div>
                {/* Total and Order Button */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        Total Amount
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Including all charges
                      </p>
                    </div>

                    <div className="text-center sm:text-right">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5a189a] to-[#9d4edd] bg-clip-text text-transparent">
                        ৳ {totalPrice}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1">
                        + Free Home Delivery
                      </p>
                    </div>

                    <button
                      onClick={handleOrderSubmit}
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base md:text-lg flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Place Order
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProductPage;
