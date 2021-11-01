import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Helvetica, sans-serif;
  }
`;

const theme = {
  colors: {
    border: '#dbdbdb',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#FAFAFA',
    primaryText: '#262626',
    secondaryText: '#989898',
    alert: '##ED4956',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
