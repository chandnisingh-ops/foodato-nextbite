import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2943eb32-b9c4-474a-a906-53304d666a9b.png" 
                alt="FOODATO Logo" 
                className="h-12 w-12 object-contain" 
              />
              <span className="text-xl font-bold">FOODATO</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your favorite food delivered fresh and fast to your doorstep.
            </p>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">About Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/investors" className="hover:text-primary transition-colors">Investors</Link></li>
              <li><Link to="/newsroom" className="hover:text-primary transition-colors">Newsroom</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📞 +91 123 456 7890</li>
              <li>📧 support@foodato.com</li>
              <li>📍 123 Food Street, Taste City, India</li>
              <li>🕒 24/7 Customer Support</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 FOODATO. All rights reserved. | Made with ❤️ for food lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;