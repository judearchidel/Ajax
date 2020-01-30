import React, {Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import { Route, component } from 'react-router-dom';
import './Posts.css';
import FullPost from '../FullPost/FullPost';


class Posts extends Component {
    
    constructor(){
        super()
       this.state={
        post: []
    }
}

SelectedIdHandler = (id) => {
    console.log(id);
    this.props.history.push({pathname:'/posts/'+ id});
}

    
    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
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
                /*this.setState({
                        error: true
                })*/
                console.log(error);
            })
    }


   

    render(){
                
          const posts = this.state.post.map(item=>{
            return (
           // <Link to={'/posts/' + item.id} key={item.id}>
                    <Post 
                    key={item.id}
                    clicked = {()=>this.SelectedIdHandler(item.id)}
                    title={item.title} 
                    author={item.author}
                    />
           // </Link>
            );
        })
    
        return(
            <div>
            <section className="Posts">
                    {posts}
         </section>
         <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
         </div>)
    }
}

export default Posts;