import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostServise from '../Api/PostServise';
import { Loader } from '../components/Ui/loader/Loader';

const PostidPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostsById, isLoading, error] = useFetching(async(id) =>{
     const response = await PostServise.getById(id)
     setPost(response.data);
  });

  const [fetchComments, isCommLoading, comError] = useFetching(async(id) =>{
    const response = await PostServise.getCommentsByPosting(id)
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostsById(params.id)
    fetchComments(params.id)
  }, []);

  return (
    <div className='comments'>
      <h3>Страница поста id = {params.id}</h3>
      {isLoading
        ? <Loader />
        : ( <>
              <div className='comments__title'>{post.id}. {post.title}</div>
              <h3>Комментарии</h3>
              <div>
                {comments.map(com => 
                <div className='comments__posts' key={com.id}>
                  <h5>{com.email}</h5>
                  <div>{com.body}</div>
                </div>
                )}
              </div>
            </>
          )
      }
    </div>
  )
}

export default PostidPage;