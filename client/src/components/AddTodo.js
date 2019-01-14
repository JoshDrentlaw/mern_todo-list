import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class AddTodo extends React.Component {
    add = () => {
        let todo = document.getElementById('new-todo').value;
        if (todo) {
            this.setState(state => ({
                items: [...state.items, { id: '', todo}]
            }));
        }
    }

    render() {
        return (
            <InputGroup className="w-50 my-3 mx-auto">
                <Input type="text" id="new-todo" placeholder="Enter new todo..." />
                <InputGroupAddon addonType="append"><Button onClick={ this.add }>Submit</Button></InputGroupAddon>
            </InputGroup>
        );
    }
}

export default AddTodo;