import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
   
   state = {
       lodadedpost: null
   }
   componentDidMount () {
    console.log(this.props);
    this.loaded();
    }

    componentDidUpdate()
{
    this.loaded();
}
    loaded () {
        if(this.props.match.params.id){
            if((!this.state.lodadedpost) || (this.state.lodadedpost && this.props.match.params.id != this.state.lodadedpost.id))
             {   
             axios.get('/posts/'+ this.props.match.params.id)
                 .then(response =>{
                         this.setState({
                             lodadedpost: response.data
                         })
                 })
             }
             }
    }

    deleteHandler  = () =>{
        console.log("clicked");
        axios.delete('/posts/'+ this.props.match.paramsid)
        .then(response => {
            console.log(response);
        })
    }
   
    render () {
        
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.lodadedpost){
            post = (
            <div className="FullPost">
                <h1>{this.state.lodadedpost.title}</h1>
                <p>{this.state.lodadedpost.body}</p>
                <div className="Edit">
                    <button  onClick={this.deleteHandler} className="Delete">Delete</button>
                </div>
            </div>

        );}
        return post;
    }
}

export default FullPost;