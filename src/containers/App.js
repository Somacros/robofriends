import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {

	constructor(){
		super()
		this.state = {
			Robots: [],
			searchfield:''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ Robots: users }))
	}

	render() {
		const { Robots, searchfield } = this.state;
		const filteredRobots = Robots.filter(Robot =>{
		return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
			<div className = 'tc'>
				<h1 className = "f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<br></br>
				<br></br>
				<Scroll>
				<ErrorBoundry>
					<CardList Robots = { filteredRobots} />	
				</ErrorBoundry>
				</Scroll>
				
			</div>
		);
	}
}

export default App;