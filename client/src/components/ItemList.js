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
                    onClick={() => this.props.delete(this.props.id)}
                >&times;</Button>
            </ListGroupItem>
        );
    }
}

class ItemList extends React.Component {

    render() {
        const { items } = this.props.state;
        console.log(items);
        return (
            <ListGroup>
                <TransitionGroup className="todo-list">
                    {items.map(({ _id, todo }) => (
                        <CSSTransition key={ _id } timeout={ 500 } classNames="fade">
                            <ItemListItem
                                id={ _id }
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