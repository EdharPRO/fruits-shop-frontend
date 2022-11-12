import cocaCola from './drinks/cocaCola.png';
import fanta from './drinks/fanta.png';
import monster from './drinks/monster.png';
import redBull from './drinks/redBull.png';
import cabbageOne from './vegetables/cabbageOne.png';
import potato from './vegetables/potato.png';
import onion from './vegetables/onion.png';
import cabbageTwo from './vegetables/cabbageTwo.png';
import { productCategoriesMap } from './productCategoriesMap';

export const products = [
  { category: productCategoriesMap.drinks, name: 'Coca-Cola', price: 33, weight: 1, id: 1, img: cocaCola },
  { category: productCategoriesMap.drinks, name: 'Fanta', price: 33, weight: 1, id: 2, img: fanta },
  { category: productCategoriesMap.drinks, name: 'Monster', price: 33, weight: 1, id: 3, img: monster },
  { category: productCategoriesMap.drinks, name: 'Redbull', price: 33, weight: 1, id: 4, img: redBull },
  { category: productCategoriesMap.vegetables, name: 'Cabbage', price: 55, weight: 1, id: 5,img: cabbageOne },
  { category: productCategoriesMap.vegetables, name: 'Potato', price: 96, weight: 4, id: 6,img: potato },
  { category: productCategoriesMap.vegetables, name: 'Onion', price: 41, weight: 1, id: 7,img: onion },
  { category: productCategoriesMap.vegetables, name: 'Cabbage', price: 74, weight: 3, id: 8,img: cabbageTwo }
];
