import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Receipt } from "lucide-react";
import Header from "@/components/Header";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface OrderData {
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  orderId: string;
  timestamp: string;
}

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { toast } = useToast();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Get order data from localStorage
    const pendingOrder = localStorage.getItem('pendingOrder');
    if (pendingOrder) {
      const data = JSON.parse(pendingOrder);
      setOrderData(data);
      
      // Clear cart and pending order
      clearCart();
      localStorage.removeItem('pendingOrder');
      
      toast({
        title: "Payment Successful!",
        description: `Your order ${data.orderId} has been confirmed.`,
      });
    } else {
      // No order data found, redirect to home
      navigate("/");
    }
  }, [clearCart, navigate, toast]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-muted-foreground">
                <p>Thank you for your order. Your payment has been processed successfully.</p>
                <p className="mt-2 font-semibold">Order ID: {orderData.orderId}</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Receipt className="h-4 w-4" />
                  Order Summary
                </h3>
                <div className="space-y-2 text-sm">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.name} x {item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 font-semibold flex justify-between">
                    <span>Total Amount</span>
                    <span>₹{orderData.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>Your order is being prepared and will be delivered soon.</p>
                <p>You will receive updates via email and SMS.</p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate("/")} className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Continue Shopping
                </Button>
                <Button variant="outline" onClick={() => navigate("/orders")}>
                  View Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
