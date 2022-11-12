import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';
import { theme } from './theme';
import { ProductsProvider } from './modules/products';
import { PurchasesProvider } from './modules/purchases';
import { NotFound } from './app/NotFound';
import { PayPage } from './app/PayPage';
import { MainPage } from './app/MainPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme(theme)}>
        <ProductsProvider>
          <PurchasesProvider>
            <Header />

            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/pay" element={<PayPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PurchasesProvider>
        </ProductsProvider>

        <CssBaseline />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
