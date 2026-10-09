import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNavigateToShop = (categoryId?: string) => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    } else {
      setSelectedCategory('all');
    }
    setCurrentTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAbout = () => {
    setCurrentTab('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSearch = () => {
    setCurrentTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomePage
            onNavigateToShop={handleNavigateToShop}
            onNavigateToContact={handleNavigateToContact}
            onNavigateToAbout={handleNavigateToAbout}
          />
        )}

        {currentTab === 'shop' && (
          <ShopPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {currentTab === 'categories' && (
          <CategoriesPage
            onSelectCategory={(categoryId) => handleNavigateToShop(categoryId)}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onNavigateToShop={() => handleNavigateToShop()}
            onNavigateToContact={handleNavigateToContact}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(categoryId) => handleNavigateToShop(categoryId)}
        setCurrentTab={setCurrentTab}
      />

      {/* Overlays & Modals */}
      <ProductModal />
      <CartDrawer onNavigateToShop={() => handleNavigateToShop()} />
      <WhatsAppFloatingButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
