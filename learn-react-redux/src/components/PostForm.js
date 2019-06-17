import React, {Component} from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>ADD POST</h1>
                <form>
                    <div>
                        <label>Title: </label><br/>
                        <input name="title" onChange={this.onChange} type="text" value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label><br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;