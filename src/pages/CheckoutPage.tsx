import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Smartphone, Building2, Banknote } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { STRIPE_PAYMENT_LINK, STRIPE_CONFIG } from "@/lib/stripe";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getTotalPrice();
  const deliveryFee = 50;
  const total = subtotal + deliveryFee - discount;

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setDiscount(subtotal * 0.1);
      toast({
        title: "Coupon Applied!",
        description: "You saved ₹" + (subtotal * 0.1).toFixed(2),
      });
    } else if (couponCode.toLowerCase() === "first20") {
      setDiscount(subtotal * 0.2);
      toast({
        title: "Coupon Applied!",
        description: "You saved ₹" + (subtotal * 0.2).toFixed(2),
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "Please enter a valid coupon code",
        variant: "destructive",
      });
    }
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    if (paymentMethod === "card") {
      // Redirect to Stripe payment link for card payments
      const stripeUrl = new URL(STRIPE_PAYMENT_LINK);
      
      // Add order details and configuration
      const orderData = {
        items: items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        total: total,
        orderId: `order_${Date.now()}`,
        timestamp: new Date().toISOString()
      };
      
      // Store order data in localStorage for success page
      localStorage.setItem('pendingOrder', JSON.stringify(orderData));
      
      // Configure Stripe URL parameters
      stripeUrl.searchParams.set('prefilled_email', 'customer@foodato.com');
      stripeUrl.searchParams.set('client_reference_id', orderData.orderId);
      
      // Redirect to Stripe checkout
      window.location.href = stripeUrl.toString();
      
      toast({
        title: "Redirecting to Payment",
        description: "Redirecting to secure Stripe checkout...",
      });
      
      return;
    }
    
    // Simulate payment processing for other methods
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Order Placed Successfully!",
      description: `Your order of ₹${total.toFixed(2)} has been confirmed via ${paymentMethod.toUpperCase()}.`,
    });
    
    clearCart();
    navigate("/");
    setIsProcessing(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <Button onClick={() => navigate("/")}>Continue Shopping</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.quantity}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{item.quantity}</div>
                      <div className="text-xs text-muted-foreground">Qty</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">₹{item.price * item.quantity}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary & Payment */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Coupon Code */}
                <div className="space-y-2">
                  <Label>Apply Coupon</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      Apply
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Try: SAVE10 or FIRST20
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="upi" id="upi" />
                      <Smartphone className="h-5 w-5 text-primary" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">
                        UPI Payment
                        <div className="text-xs text-muted-foreground">
                          Pay using Google Pay, PhonePe, Paytm
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-5 w-5 text-primary" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        Credit/Debit Card
                        <div className="text-xs text-muted-foreground">
                          Visa, Mastercard, RuPay
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Building2 className="h-5 w-5 text-primary" />
                      <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                        Net Banking
                        <div className="text-xs text-muted-foreground">
                          All major banks supported
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="cod" id="cod" />
                      <Banknote className="h-5 w-5 text-primary" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        Cash on Delivery
                        <div className="text-xs text-muted-foreground">
                          Pay when you receive
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {!user ? (
                  <Button 
                    className="w-full mt-6 bg-primary hover:bg-primary/90" 
                    size="lg"
                    onClick={() => navigate("/auth")}
                  >
                    Sign In to Order
                  </Button>
                ) : (
                  <Button 
                    className="w-full mt-6 bg-red-500 hover:bg-red-600" 
                    size="lg"
                    onClick={handleCheckout}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Proceed to Payment"}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
