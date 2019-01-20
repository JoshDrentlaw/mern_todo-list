import React from 'react';
import { 
    Container
} from 'reactstrap';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './css/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        fetch('/api/todos')
            .then(res => res.json())
            .then(data => this.setState({items: data}));
    }

    add = () => {
        let todo = document.getElementById('new-todo').value;
        if (todo) {
            fetch('/api/todos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({"todo": todo})
            })
                .then(res => res.json())
                .then(todo => {
                    this.setState(state => ({
                        items: [...state.items, todo]
                    }));
                });
        }
    }

    delete = (id) => {
        const url = `/api/todos/${id}`;
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                this.setState(state => ({
                    items: state.items.filter(item => item._id !== id)
                }));
            });
    }

    render() {
        return (
            <Container id="main-container">
                <h1 id="header">Todo List</h1>
                <AddTodo add={ this.add } />
                <TodoList state={ this.state } delete={ this.delete } />
            </Container>
        );
    }
}

export default App;