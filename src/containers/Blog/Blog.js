import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route, NavLink , Switch, Redirect} from 'react-router-dom';
//import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../Hoc/asyncComponent';

const AsynPost = asyncComponent(()=>{
    return import('../NewPost/NewPost');
})
class Blog extends Component {

    state= {
        auth: false
    }
    render () {
      

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts"
                            activeStyle={{
                                color: 'red',
                                textDecoration: 'underline'
                            }}
                            exact>Home</NavLink></li>
                            <li><NavLink to= {{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?search-submit:jude"
                            }} >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                 {/*<Route path="/" exact render={()=><h1>Home</h1>}/>
        <Route path="/" render={()=><h1>home2</h1>}/>*/}
        
        <Switch>
                {this.state.auth?<Route path="/new-post" component = {AsynPost}/>:null}
                <Route path="/posts"  component = {Posts}/>
                <Route render={()=><h1>Not found</h1>}/>
                {/*<Redirect from='/' to="/posts"/>*/}
                </Switch>
               
            </div>
        );
    }
}

export default Blog;
/*
<section>
                    <FullPost id={this.state.selectedid}/>
                </section>
                <section>
                    <NewPost />
                </section>*/