import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                // main: '#FA9787',
                main: '#F64A5F',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <NavBar />
                <main style={{ marginTop: 80 }}>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route exact path="/home">
                            <HomePage />
                        </Route>
                        <Route exact path="/products">
                            <ProductPage />
                        </Route>
                        <Route exact path="/about">
                            <AboutPage />
                        </Route>
                        <Route exact path="/contact">
                            <ContactPage />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
