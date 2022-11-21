import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Badge, Box, IconButton, Stack, styled, Toolbar } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PurchasesContext } from '../../modules/purchases';
import { Basket } from '../Basket';
import logo from './logo.png';
import { SignIn } from './SignIn';

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  alignItems: 'center'
});

const menuItems = [
  { name: 'Home', link: '/', id: 1 },
  { name: 'Products', link: '#', id: 2 },
  { name: 'Sales', link: '#', id: 3 },
  { name: 'Contact Us', link: '#', id: 4 }
];

export const Header = () => {
  const [ open, setOpen ] = useState(false);
  const [ isCartOpen, setCartOpen ] = useState(false);
  const { purchases } = useContext(PurchasesContext);

  return (
    <>
      <AppBar color="secondary" position="fixed">
        <StyledToolbar>
          <Stack direction="row" alignItems="center">
            <IconButton
              color="inherit"
              sx={{ display: { md: 'none' }, mr: 2 }}
              onClick={() => setOpen((open) => !open)}
            >
              <MenuIcon/>
            </IconButton>

            <Link to="/">
              <img alt="logo" src={logo}/>
            </Link>
          </Stack>

          <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <MenuItem key={item.id}>{item.name}</MenuItem>
            ))}
          </Box>

          <Stack spacing={1} direction="row">
            <SignIn />

            <Badge badgeContent={purchases.length} color="primary">
              <IconButton color="inherit" onClick={() => setCartOpen(true)} >
                <ShoppingCartIcon />
              </IconButton>
            </Badge>

            <Basket
              cartOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
            />

            <IconButton  color="inherit">
              <Instagram />
            </IconButton>

            <IconButton sx={{ display: { xs: 'none', md: 'flex' } }} color="inherit">
              <Facebook />
            </IconButton>
          </Stack>
        </StyledToolbar>

        <Menu
          open={open}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={() => setOpen((open) => !open)}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.id}>{item.name}</MenuItem>
          ))}
        </Menu>
      </AppBar>

      <Toolbar />
    </>
  );
};
// }

// {menuItems.map((item) => {
//     return <MenuItem button key={item.id}>{item.name}</MenuItem>
// })}
