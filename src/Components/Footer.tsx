import { Linkedin } from "lucide-react";
import {
  Fiverr,
  Freelancer,
  GitHub,
  Gmail,
  Upwork,
  X,
} from "../assets/icons/logos";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/solobarine",
    icon: GitHub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/solomon-akpuru",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/solomonakpuru",
    icon: X,
  },
  {
    name: "Email",
    url: "mailto:solobarine@gmail.com",
    icon: Gmail,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01d7b0469a7602559b",
    icon: Upwork,
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/solomonakpuru",
    icon: Fiverr,
  },
  {
    name: "Freelancer",
    url: "https://www.freelancer.com/u/solobarine",
    icon: Freelancer,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Name */}
            <h3 className="text-2xl font-bold mb-6">Solomon Akpuru</h3>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            <hr className="mb-6" />

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} Solomon Akpuru. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
