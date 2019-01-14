import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

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

    delete = (id) => {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== id)
        }));
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
                    onClick={() =>  this.delete(this.props.lookup) }
                >&times;</Button>
            </ListGroupItem>
        );
    }
}

class ItemList extends React.Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return (
            <ListGroup>
                <TransitionGroup className="todo-list">
                    {items.map(({ id, todo }) => (
                        <CSSTransition key={ id } timeout={ 1000 } classNames="fade">
                            <ItemListItem
                                lookup={ id }
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

ItemList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(ItemList);