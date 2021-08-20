import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    // to catch errors in the state
    componentDidCatch (error,info){
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1> Ooops there is a problem</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;