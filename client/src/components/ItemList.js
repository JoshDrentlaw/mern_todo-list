import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import uuid from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
                    size="sm"
                    onClick={ this.props.delete }
                >&times;</Button>
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
                <TransitionGroup className="todo-list">
                    {items.map(({ id, todo }) => (
                        <CSSTransition key={ id } timeout={ 500 } classNames="fade">
                            <ItemListItem
                                todo={ todo }
                                delete={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }));
                                }}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        );
    }
}

export default ItemList;