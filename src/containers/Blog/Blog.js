import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        post: [],
        selectedid: null,
        error: false
    }
    
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                const post = response.data.slice(0,4);
                const updatepost = post.map(item=>{
                    return {
                        ...item,
                        author: 'Max'
                    }
                })
                this.setState({
                    post: updatepost
                })
            })
            .catch(error =>{
                this.setState({
                        error: true
                })
            })
    }


    SelectedIdHandler = (id) => {
        this.setState({
            selectedid: id
        })
    }
    

    render () {
        let posts = <p style={{textAlign: "center"}}>Wrong ????!!!!!</p>
        if(!this.state.error){
                posts = this.state.post.map(item=>{
            return <Post 
            clicked={() =>this.SelectedIdHandler(item.id)}
            title={item.title} 
            key={item.id} 
            author={item.author}/>
        })
    }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedid}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;