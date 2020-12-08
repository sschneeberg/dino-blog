//to use Class components props are this.props

function Post(props) {
  const comments = props.comments.map((comment) => {
    return <p className="comments">{comment}</p>;
  });
  return (
    <div className="Post">
      <article className="post">
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        <p>{props.body}</p>
      </article>
      <hr />
      <h3>Comments:</h3>
      {comments}
    </div>
  );
}

export default Post;
