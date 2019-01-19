import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
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
                    onClick={() => this.props.delete(this.props._id)}
                >&times;</Button>
            </ListGroupItem>
        );
    }
}

class ItemList extends React.Component {

    render() {
        const { items } = this.props.state;
        return (
            <ListGroup>
                <TransitionGroup className="todo-list">
                    {items.map(({ id, todo }) => (
                        <CSSTransition key={ id } timeout={ 500 } classNames="fade">
                            <ItemListItem
                                _id={ id }
                                todo={ todo }
                                delete={ this.props.delete }
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        );
    }
}

export default ItemList;