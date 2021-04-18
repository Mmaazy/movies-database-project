import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import NavBar from './components/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import Register from './components/register';
import watchMovies from './components/mymovies';
import one from './components/one'
import Sidebar from './components/sidebar';
import Footer from './components/footer'


function App() {
	return (
		<React.Fragment>
			<NavBar/>
			
			
			<main className="container">
				<Switch>
					<Route path="/movies/:id" component={MovieForm} />
					<Route path="/Login" component={LoginForm} />
					<Route path="/movies" component={Movies} />
					<Route path="/customers" component={Customers} />
					<Route path="/watchMovies" component={watchMovies} />
					<Route path="/rentals" component={Rentals} />
					<Route path="/not-found" component={NotFound} />
					<Route path="/register" component={Register} />
					<Route path="/one" component={one} />
					<Redirect from="/" exact to="/Login" /> <Redirect to="/not-found" />
				</Switch>
			</main>

			<Footer/>
		</React.Fragment>
	);
}

export default App;
