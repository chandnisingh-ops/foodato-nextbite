import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Star, Smartphone, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="h-14 w-20 rounded-lg overflow-hidden p-1">
            <img src="/lovable-uploads/fb55fe2d-99e8-483e-b043-0abe20dd791a.png" alt="FOODATO Logo" className="h-full w-full object-contain" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Download FOODATO App
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the best food delivery experience right in your pocket. Order from your favorite restaurants with just a few taps.
            </p>
          </div>

          {/* App Preview */}
          <div className="mb-12">
            <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                <div className="h-full bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="h-16 px-8 bg-black text-white hover:bg-gray-800">
              <Apple className="w-8 h-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </Button>
            <Button size="lg" className="h-16 px-8 bg-black text-white hover:bg-gray-800">
              <Download className="w-8 h-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Get your food delivered in 30 minutes or less</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-muted-foreground">Only the best restaurants and highest quality meals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">Simple and intuitive interface for effortless ordering</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Restaurants</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DownloadApp;