import { NavLink } from "@/components/NavLink";
import { HeartHandshake, GalleryHorizontalEnd, MailOpen, PartyPopper, Music4 } from "lucide-react";

const Navigation = () => {
  const links = [
    { to: "/", label: "Home", icon: HeartHandshake },
    { to: "/gallery", label: "Gallery", icon: GalleryHorizontalEnd },
    { to: "/love-letter", label: "Love Letter", icon: MailOpen },
    { to: "/wishes", label: "Wishes", icon: PartyPopper },
    { to: "/songs", label: "Songs", icon: Music4 },
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
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 text-foreground/70 hover:text-primary hover:scale-105"
              activeClassName="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/40 scale-105"
            >
              <link.icon className="w-5 h-5 text-white stroke-[2.5] transition-transform duration-300 group-hover:rotate-12" />
              <span className="hidden sm:inline">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
