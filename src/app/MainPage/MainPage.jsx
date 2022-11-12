import { Container, Stack } from '@mui/material';
import { Facts } from '../../components/Facts';
import { Goods } from '../../components/Goods';
import { productCategoriesMap } from '../../db';
import { Blocks } from '../../components/Blocks';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';

export const MainPage = () => {
  return (
    <div>
      <Hero />

      <Container>
        <Stack spacing={5}>
          <Facts />
          <Goods category={productCategoriesMap.vegetables} />
          <Goods category={productCategoriesMap.drinks} />
          <Goods category={productCategoriesMap.vegetables} />
          <Goods category={productCategoriesMap.drinks} />
          <Blocks />
          <Footer />
        </Stack>
      </Container>
    </div>
  );
};
