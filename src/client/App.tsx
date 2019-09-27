import * as React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

import Home from './Pages/Home';
import Book from './Pages/Book';
import Books from './Pages/Books';
import Update from './Pages/Update';
import New from './Pages/New';
import Login from './Pages/Login';
import Register from './Pages/Register'



class App extends React.Component<IAppProps, IAppState> {



    render() {
        return (
            <Router>
                <main className="container">
                    <nav className="navbar navbar-dark">
                        <Link to='/'>Home</Link>
                        <Link to='/books'>Books</Link>
                        <Link to='/books/new'>New Book</Link>
                        <Link to='/register'>Regsiter</Link>
                        <Link to='/login'>Login</Link>
                    </nav>
                </main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/books" component={Books} />
                    <Route exact path="/books/:id" component={Book} />
                    <Route exact path="/update/:id" component={Update} />
                    <Route exact path="/books/new" component={New} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
        )
    }
}

export interface IAppProps { }

export interface IAppState {}

export default App;