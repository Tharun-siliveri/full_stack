import React from "react";

class AddPost extends React.Component {
    state = {
        auther:"",
        title:"",
        description:""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.auther==="" || this.state.title==="" || this.state.description===""){
            alert("fill all details!!!");
            return;
        }
        this.props.addPostsHandler(this.state);  
        this.setState({ auther:"",title:"",description:""})
        console.log(this.state);

    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Post</h2>
                <form  className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label >Auther</label>
                        <input 
                            type="text" 
                            name="auther" 
                            placeholder="auther" 
                            value={this.state.auther}
                            onChange={ (e) =>this.setState({auther:e.target.value}) }
                        />
                    </div>
                    <div className="field">
                        <label >Title</label>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="title" 
                        value={this.state.title}
                        onChange={ (e) =>this.setState({title:e.target.value}) }
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="">Description</label>
                        <input 
                        type="text" 
                        name="description" 
                        placeholder="descrption" 
                        value={this.state.description}
                        onChange={ (e) =>this.setState({description:e.target.value}) }
                        />
                    </div>
                    <button className="ui button blue">Add post</button>
                </form>

            </div>
        )
    }
}

export default AddPost;
