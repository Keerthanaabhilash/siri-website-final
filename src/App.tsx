import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Your route pages
import Products from "./pages/Products";

// ⭐ NEW — Import your Team page
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          {/* HOME PAGE */}
          <Route path="/" element={<Index />} />

          {/* OFFERING SUBPAGES */}
          <Route path="/products" element={<Products />} />

          {/* COMPANY SUBPAGES */}
          {/* ⭐ NEW — TEAM PAGE ROUTE */}
          <Route path="/team" element={<Team />} />

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
