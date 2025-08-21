import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { SignIn, SignUp } from "@clerk/clerk-react";

// CSS styles for the animated welcome text
const welcomeStyles = `
  .welcome-container {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  
  .welcome-text {
    position: relative;
    background: linear-gradient(90deg, #8B5CF6 0%, #8B5CF6 50%, #000000 50%, #000000 100%);
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: slideReveal 3s ease-in-out forwards;
  }
  
  .welcome-text::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent 0%, transparent 48%, #FFFFFF 49%, #FFFFFF 51%, transparent 52%, transparent 100%);
    animation: cursorSlide 3s ease-in-out forwards;
    z-index: 1;
  }
  
  @keyframes slideReveal {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0% 0;
    }
  }
  
  @keyframes cursorSlide {
    0% {
      transform: translateX(-100%);
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  @media (max-width: 768px) {
    .welcome-text {
      font-size: 2.5rem;
    }
  }
`;

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Clerk handles submission internally; we just show the components

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: welcomeStyles }} />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-black rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-800 to-black rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>

      {/* Header */}
      <header className="relative z-10 w-full backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container flex h-16 items-center">
          <Link to="/">
            <Button variant="outline" size="sm" className="mr-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="h-14 w-20 rounded-lg overflow-hidden p-1 bg-white/20 backdrop-blur-sm">
            <img src="/lovable-uploads/2943eb32-b9c4-474a-a906-53304d666a9b.png" alt="FOODATO Logo" className="h-full w-full object-contain" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container py-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          {/* Title section with animated WELCOME text */}
          <div className="text-center mb-8">
            <div className="relative">
              <div className="welcome-container mb-3">
                <h1 className="welcome-text text-4xl md:text-5xl font-bold drop-shadow-lg">
                  {isSignUp ? "JOIN FOODATO" : "WELCOME"}
                </h1>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-black blur-xl opacity-30 rounded-full"></div>
            </div>
            <p className="text-white/90 text-lg font-medium">
              {isSignUp 
                ? "Create your account and start your food journey" 
                : "Sign in to continue your delicious experience"
              }
            </p>
          </div>

          {/* Enhanced card with glassmorphism: render Clerk components */}
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl shadow-black/10">
            {isSignUp ? (
              <SignUp appearance={{ elements: { card: 'shadow-none border-0' } }} routing="hash" signInUrl="#/sign-in" />
            ) : (
              <SignIn appearance={{ elements: { card: 'shadow-none border-0' } }} routing="hash" signUpUrl="#/sign-up" />
            )}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <Button
                  variant="link"
                  className="ml-1 p-0 h-auto text-primary hover:text-primary/80 font-semibold"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </Button>
              </p>
            </div>
            {/* Social providers are configured in Clerk dashboard; Clerk UI includes them automatically if enabled */}
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default Auth;