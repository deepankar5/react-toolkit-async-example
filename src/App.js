import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPosts, editPostFunction} from "./app/sampleSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts()).then(()=> editPostFunction(dispatch))
  }, [dispatch])
   const posts = useSelector((store)=> store.posts.posts)
  return (
    <main className="App">
      {
        posts.length > 0 && posts.map((post) => <div key={post.id}><span>{`${post.id} )`}</span>{post.title}</div>)
      }
    </main>
  );
}

export default App;
