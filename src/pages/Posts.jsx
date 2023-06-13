import React, {useEffect, useState} from 'react';
import { PostList } from './../components/PostList';
import { PostForm } from './../components/PostForm';
import { PostFilter } from './../components/PostFilter';
import { MyModal } from './../components/Ui/modal/MyModal';
import { MyButton } from './../components/Ui/button/MyButton';
import { usePosts } from './../hooks/usePost';  
import PostServise from './../Api/PostServise';
import { Loader } from './../components/Ui/loader/Loader';
import { useFetching } from './../hooks/useFetching';
import { getPageCount } from './../utils/pages';
import { Pagination } from './../components/Ui/pagination/Pagination';           

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedSearchPosts = usePosts(posts, filter.sort, filter.query);//castom hooks

  const [fetchPosts, postLoadung, postError] = useFetching(async(limit, page) => {//castom hooks 
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {//callback
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {//callback
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) =>{
    setPage(page)
    fetchPosts(limit, page)
  }

   return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Создать заметку
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr />
      <div>
        <PostFilter 
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      {postError && 
        <h2>Ошибка ${postError}</h2>
      }
      {postLoadung
        ? <div className='load'><Loader /></div>
        : <PostList remove={removePost} posts={sortedSearchPosts} title='Список постов'/>
      }
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPage}
      />
    </div>
  );
}

export default Posts;