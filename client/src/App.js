import React from 'react';
import { 
    Container
} from 'reactstrap';
import AddTodo from './components/AddTodo';
import ItemList from './components/ItemList';
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
            this.setState(state => ({
                items: [...state.items, { todo }]
            }));
            fetch('/api/todos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({"todo": todo})
            });
        }
    }

    delete = (id) => {
        this.setState(state => ({
            items: state.items.filter(item => item._id !== id)
        }));
    }

    render() {
        return (
            <Container id="main-container">
                <h1 id="header">Todo List</h1>
                <AddTodo add={ this.add } />
                <ItemList state={ this.state } delete={ this.delete } />
            </Container>
        );
    }
}

export default App;