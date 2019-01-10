import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import uuid from 'uuid';

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
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: uuid(),
                    value: "Make this app."
                },
                {
                    id: uuid(),
                    value: "Find a job."
                },
                {
                    id: uuid(),
                    value: "Seek fulfillment."
                },
            ]
        }
    }

    render() {
        const { items } = this.state;
        return (
            <ListGroup>
                {
                    items.map(({ id, value }) => {
                        <ItemListItem
                            value={ value }
                        />
                    });
                }
            </ListGroup>
        );
    }
}

export default ItemList;