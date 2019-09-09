import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from './actions/index';
import Post from './components/Post/Post';
import Clock from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  // This constructor can be omitted
  // constructor(props) {
  //   super(props);
  // }
  getPosts = () => {
    this.props.getPosts();
  }
  componentDidMount () {
    this.getPosts();
  }
  render () {
    const { posts } = this.props;
    return (
      <main>
        <div className='clock-container'>
          <Clock />
        </div>
        <div className='posts-container'>
          { posts.length > 0 ? (posts.map(post => <Post key={post.id} title={post.title}>{post.body}</Post>)) : (<p>There are no posts.</p>) }
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getPosts })(App);
