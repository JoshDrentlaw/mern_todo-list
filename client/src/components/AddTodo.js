import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    submit = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            this.props.add();
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <InputGroup className="w-50 my-3 mx-auto">
                <Input type="text" id="new-todo" placeholder="Enter new todo..." value={this.state.value} onChange={this.handleChange} onKeyPress={this.submit} />
                <InputGroupAddon addonType="append">
                    <Button onClick={this.submit}>Submit</Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }
}

export default AddTodo;