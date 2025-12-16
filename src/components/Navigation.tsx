import { NavLink } from "@/components/NavLink";
import { Heart, Images, Mail, Sparkles, Music } from "lucide-react";

const Navigation = () => {
  const links = [
    { to: "/", label: "Home", icon: Heart },
    { to: "/gallery", label: "Gallery", icon: Images },
    { to: "/love-letter", label: "Love Letter", icon: Mail },
    { to: "/wishes", label: "Wishes", icon: Sparkles },
    { to: "/songs", label: "Songs", icon: Music },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-8 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 text-foreground/70 hover:text-primary"
              activeClassName="bg-primary text-primary-foreground shadow-lg shadow-primary/30"
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
