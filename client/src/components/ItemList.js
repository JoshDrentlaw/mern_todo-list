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
                <span className="todo-item">
                    { this.state.checked ? <s>{ this.props.todo }</s> : this.props.todo }
                </span>
                <Button
                    className="float-right"
                    color="danger"
                    onClick={ this.props.delete }
                >X</Button>
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

    render() {
        const { items } = this.state;
        return (
            <ListGroup>
                {
                    items.map(({ id, todo }) => {
                        return (
                            <ItemListItem
                                key={ id }
                                todo={ todo }
                                delete={() => {
                                    this.setState(state => {
                                        return this.state.items.filter(item => item.id !== id);
                                    });
                                }}
                            />
                        );
                    })
                }
            </ListGroup>
        );
    }
}

export default ItemList;