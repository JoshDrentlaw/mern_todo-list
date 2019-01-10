import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

class ItemListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    toggle = () => {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <ListGroupItem className="todo-list-item">
                <input
                    type="checkbox"
                    className="mr-1"
                    checked={ this.state.checked }
                    onChange={() => {
                        this.toggle();
                    }}
                />
                <span className="todo-item">{
                        this.state.checked ? <s>{ this.props.value }</s> : this.props.value
                }</span>
                <Button className="float-right" color="danger">X</Button>
            </ListGroupItem>
        );
    }
}

class ItemList extends React.Component {
render() {
        return (
            <ListGroup>
                <ItemListItem value="Make this app." />
                <ItemListItem value="Find a job." />
                <ItemListItem value="Seek fulfillment." />
            </ListGroup>
        );
    }
}

export default ItemList;