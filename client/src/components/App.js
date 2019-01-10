import React from 'react';
import { 
    Container
} from 'reactstrap';
import ItemList from './ItemList';
import '../css/index.css';

class App extends React.Component {
    render() {
        return (
            <Container>
                <h1 id="header">Todo List</h1>
                <ItemList />
            </Container>
        );
    }
}

export default App;