import React from 'react';
import { 
    Container
} from 'reactstrap';
import AddTodo from './components/AddTodo';
import ItemList from './components/ItemList';
import './css/index.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {

    render() {
        return (
            <Provider store={ store }>
                <Container id="main-container">
                    <h1 id="header">Todo List</h1>
                    <AddTodo />
                    <ItemList state={ this.state } />
                </Container>
            </Provider>
        );
    }
}

export default App;