import React, {Component} from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }


    render() {
        return (
            <div>
                <h1>ADD POST</h1>
                <form>
                    <div>
                        <label>Title: </label><br/>
                        <input name="title" type="text"/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label><br/>
                        <textarea name="body"/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;