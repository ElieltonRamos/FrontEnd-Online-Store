/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import Styled from 'styled-components';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Button } from '@mui/material';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductsData } from '../types';

const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Div = Styled.div`
  margin-left: -65px;
  margin-top: 20px;
  padding: 20px
`;

export default function NavBar() {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductsData[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery('', searchInput);
      setLoading(false);
      setProducts(data.results);
    };
    getData();
  };

  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar sx={ { width: '100vw', height: '9.25rem' } } position="static">
        <Toolbar>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
            <path d="M4.69581 15.0395H50.0021L54.6979 62.564H0L4.69581 15.0395Z" fill="#31C28D" />
            <rect x="17.2612" y="2.71009" width="20.6238" height="42.5927" rx="10.3119" stroke="#2FC18C" stroke-width="4.03509" />
          </svg>
          <Div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
              <path d="M22.2358 16.6568L22.2358 26.172C22.2358 27.6052 21.074 28.7671 19.6408 28.7671C18.2076 28.7671 17.0457 27.6052 17.0457 26.172L17.0457 16.6568" stroke="white" stroke-width="2.69006" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.47534 17.5218L1.47534 11.8992C1.47534 6.40523 5.9291 1.95147 11.4231 1.95147L12.2881 1.95147C17.7821 1.95147 22.2358 6.40523 22.2358 11.8992L22.2358 17.5218" stroke="white" stroke-width="2.69006" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.0459 14.0618L17.0459 15.7003L17.0459 18.3869C17.0459 19.8201 15.884 20.9819 14.4508 20.9819C13.0176 20.9819 11.8558 19.8201 11.8558 18.3869L11.8558 15.6345L11.8558 14.0618" stroke="white" stroke-width="2.69006" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.8555 14.0618L11.8555 15.7003L11.8555 18.3869C11.8555 19.8201 10.6936 20.9819 9.26041 20.9819C7.82719 20.9819 6.66534 19.8201 6.66534 18.3869L6.66534 15.6345L6.66534 14.0618" stroke="white" stroke-width="2.69006" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66553 14.0618L6.66553 15.7003L6.66553 18.3869C6.66553 19.8201 5.50368 20.9819 4.07046 20.9819C2.63725 20.9819 1.4754 19.8201 1.4754 18.3869L1.4754 15.6345L1.4754 14.0618" stroke="white" stroke-width="2.69006" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.9906 26.172C10.9906 27.0812 11.1309 27.9577 11.391 28.7809C11.6819 29.7017 12.1227 30.5558 12.6847 31.3148C14.2606 33.4427 16.7896 34.8222 19.6408 34.8222C22.492 34.8222 25.0211 33.4427 26.5969 31.3148C27.1589 30.5558 27.5997 29.7017 27.8906 28.7809C28.1507 27.9577 28.291 27.0812 28.291 26.172" stroke="white" stroke-width="2.69006" stroke-linecap="round"/>
              <circle cx="30.9026" cy="15.5601" r="4.48344" fill="white" />
            </svg>
          </Div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={ { flexGrow: 1, display: { xs: 'none', sm: 'block' } } }
          >
            Front End Online Store
          </Typography>
          <Button variant="contained">Pesquisar</Button>
          <Search onSubmit={ handleSubmit }>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Digite o que voce busca"
              type="text"
              name="search"
              data-testid="query-input"
              value={ searchInput }
              onChange={ (e) => setSearchInput(e.target.value) }
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
