import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const PaymentFailurePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Payment Failed",
      description: "Your payment could not be processed. Please try again.",
      variant: "destructive",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-red-600">Payment Failed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-muted-foreground">
                <p>We're sorry, but your payment could not be processed at this time.</p>
                <p className="mt-2">This could be due to:</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 text-left">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Insufficient funds in your account</li>
                  <li>• Card details entered incorrectly</li>
                  <li>• Network connectivity issues</li>
                  <li>• Bank security restrictions</li>
                </ul>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>Your cart items have been saved. You can try again or choose a different payment method.</p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate("/checkout")} className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="outline" onClick={() => navigate("/")} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailurePage;
