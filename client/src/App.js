import React from 'react';
import { 
    Container
} from 'reactstrap';
import AddTodo from './components/AddTodo';
import ItemList from './components/ItemList';
import './css/index.css';

class App extends React.Component {
    render() {
        return (
            <Container id="main-container">
                <h1 id="header">Todo List</h1>
                <AddTodo />
                <ItemList />
            </Container>
        );
    }
}

export default App;