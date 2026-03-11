import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import ToxicityGuide from './pages/ToxicityGuide';
import Footer from './components/Footer';
import Coupon from './pages/Coupon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <div className="flex flex-col min-h-[calc(100vh-80px)]">
              <Home />
              <Footer />
            </div>
          } />
          <Route path="/guia" element={
            <div className="flex flex-col min-h-[calc(100vh-80px)]">
              <ToxicityGuide />
              <Footer />
            </div>
          } />
          <Route path="/cupom" element={
            <div className="flex flex-col min-h-[calc(100vh-80px)]">
              <Coupon />
            </div>
          } />
        </Route>
        <Route path="/receitas/:id" element={
          <div className="flex flex-col min-h-screen">
            <RecipeDetails />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
