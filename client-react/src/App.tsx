import { Routes, Route } from "react-router-dom";
import { Home, Login, SentEmails } from "./pages";
import { PrivateLayout, PublicLayout } from "./router";

export const App = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/sent' element={<SentEmails />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
}