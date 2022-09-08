import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Head from "./components/head";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
  });

  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });


  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  

function App(){
    return(
    <ApolloProvider client={client}>
        <Router>

            <div>
                <Navbar/>
                <Header />
                <Head/>
                <Routes>

                    <Route 
                        path="/"
                        element={<Home />}
                    />    
                    <Route 
                        path="/login"
                        element={<Login />}
                    />
                    <Route 
                        path="/signup"
                        element={<Signup />}
                    />
                    <Route 
                        path="/projects"
                        element={<Projects />}
                    />
                    <Route 
                        path="/about"
                        element={<About />}
                    />
                    <Route 
                        path="/contact"
                        element={<Contact />}
                    />                    
                    <Route 
                        path="/home"
                        element={<Home />}
                    />
                    <Route 
                        path="/me"
                        element={<Profile />}
                    />
                </Routes>
            </div>
        
        </Router>
        <Footer />
    </ApolloProvider>

    );
}

//const App = () => <PortfolioContainer/>

export default App;
