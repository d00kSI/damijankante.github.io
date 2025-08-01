import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PaletteProvider } from "@/contexts/PaletteContext";
import SEO from "./components/SEO";
import { ToastProvider } from "@/hooks/use-toast";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
      themes={["light", "low-light", "dark"]}
    >
      <PaletteProvider>
        <TooltipProvider>
        <ToastProvider> 
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <SEO />
            <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            </BrowserRouter>
        </ToastProvider>
        </TooltipProvider>
      </PaletteProvider>        
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
