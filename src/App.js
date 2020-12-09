import './App.css';
import Post from './Post';

function App(props) {
    return (
        <div className="App">
            <Post
                title={props.post.title}
                author={props.post.author}
                body={props.post.body}
                comments={props.post.comments}
            />
        </div>
    );
}

export default App;
