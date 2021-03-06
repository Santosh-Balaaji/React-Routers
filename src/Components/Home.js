import React,{Component} from 'react';
//import axios from 'axios'; 
import { connect } from 'react-redux';


class Home extends Component{
    /*state={
        posts:[ ]
    }*/
    /*componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res);
            this.setState({
                posts: res.data.slice(0,10)
          })
     })
    }*/

    render(){
    console.log(this.props);

        const {posts} =this.props;
        const postList = posts.length?(
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                    </div>
                )
            })
        ):(
            <div className ="center">No posts Yet</div>
        )
        


    return(
        <div className="container">
        <h4 className ="center">Home</h4>
        {postList}
        </div> 
        );

}

}
const mapStatetoProps =(state)=>{  //the state refers to the state of the store
return {
    posts: state.posts
}

}
export default connect(mapStatetoProps)(Home);
