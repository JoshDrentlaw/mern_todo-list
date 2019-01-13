import React from 'react';
import { 
    Container
} from 'reactstrap';
import AddTodo from './components/AddTodo';
import ItemList from './components/ItemList';
import uuid from 'uuid';
import './css/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: uuid(),
                    todo: "Make this app."
                },
                {
                    id: uuid(),
                    todo: "Find a job."
                },
                {
                    id: uuid(),
                    todo: "Seek fulfillment."
                },
            ]
        }
    }

    add = () => {
        let todo = document.getElementById('new-todo').value;
        if (todo) {
            this.setState(state => ({
                items: [...state.items, { id: uuid(), todo}]
            }));
        }
    }

    render() {
        return (
            <Container id="main-container">
                <h1 id="header">Todo List</h1>
                <AddTodo add={ this.add } />
                <ItemList state={ this.state } />
            </Container>
        );
    }
}

export default App;