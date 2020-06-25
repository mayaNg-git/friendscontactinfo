import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({users: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const {users, searchField} = this.state;
        const filteredContact = users.filter(users => {
            return users.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !users.length ?
            <h1 className='tc'>Loading</h1>:
            (<div className='tc'>
                <h1>Friend's Contact Information</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList users={filteredContact} />
                </Scroll>
            </div>);
    }
}

export default App;