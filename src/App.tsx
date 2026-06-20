import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import CategoryProducts from "@/pages/CategoryProducts";
import Editorial from "@/pages/Editorial";
import Shipping from "@/pages/Shipping";
import Privacy from "@/pages/Privacy";
import ReturnPolicy from "@/pages/ReturnPolicy";
import Terms from "@/pages/Terms";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/:slug" component={ProductDetail} />
      <Route path="/categories/:name" component={CategoryProducts} />
      <Route path="/editorial" component={Editorial} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/return" component={ReturnPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <ScrollRestoration />
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
