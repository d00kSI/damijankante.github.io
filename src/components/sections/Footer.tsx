import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/90 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("footer.description")}
            </p>
            <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="p-2 hover:text-primary" asChild>
                <a
                  href="https://github.com/damijankante"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:text-primary" asChild>
                <a
                  href="https://www.linkedin.com/in/damijankante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                <Linkedin className="h-5 w-5" />
                </a>
              </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:text-primary" asChild>
                <a
                  href="mailto:damijan.kante@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.quickLinks")}</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("footer.about")}
              </a>
              <a href="#data-analysis" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("footer.dataAnalysis")}
              </a>
              <a href="#graphic-design" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("footer.graphicDesign")}
              </a>
              <a href="#coding" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("footer.coding")}
              </a>
              <a href="#cv" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("footer.cv")}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.services")}</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">{t("footer.dataVisualization")}</p>
              <p className="text-muted-foreground text-sm">{t("footer.statisticalAnalysis")}</p>
              <p className="text-muted-foreground text-sm">{t("footer.brandDesign")}</p>
              <p className="text-muted-foreground text-sm">{t("footer.webDevelopment")}</p>
              <p className="text-muted-foreground text-sm">{t("footer.uiUxDesign")}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="flex-grow flex flex-col">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">damijan.kante@gmail.com</p>
                <p className="text-muted-foreground text-sm">+386 (40) 525 827</p>
                <p className="text-muted-foreground text-sm">Ptuj, Slovenia</p>
              </div>
              
              <Button variant="outline" size="sm" className="mt-auto md:w-1/2" asChild>
                <a href="#contact">
                  {t("footer.getInTouch")}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {t("footer.copyright")}
          </p>
          
          <Button
            variant="link"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 text-muted-foreground hover:text-primary hover:no-underline"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            {t("footer.backToTop")}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;