import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/index.tsx";
import { DefaultLayout } from "./layouts/default-layout/index.tsx";
import { Checkout } from "./pages/checkout/index.tsx";
import { Success } from "./pages/success/index.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
