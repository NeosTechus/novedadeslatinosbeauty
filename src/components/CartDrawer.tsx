import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="cart-drawer animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <ShoppingBag size={20} className="text-accent" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold">Your Cart</h2>
                <span className="text-sm text-muted-foreground">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </span>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <ShoppingBag size={36} className="text-muted-foreground/50" />
                </div>
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-muted-foreground text-sm mb-6">Add products to get started!</p>
                <button onClick={closeCart} className="btn-accent">
                  View Products
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-secondary/50 p-3 rounded-xl">
                    {/* Image */}
                    <div className="w-24 h-28 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-sm font-semibold line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.category}
                      </p>
                      <p className="text-base font-bold text-primary">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border bg-secondary/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Subtotal</span>
                <span className="font-display text-2xl font-bold text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Taxes and shipping calculated at checkout.
              </p>
              <button className="btn-accent w-full text-base">
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-center text-sm text-muted-foreground hover:text-destructive transition-colors py-2"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
