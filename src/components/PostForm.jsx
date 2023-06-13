import React, { useState } from 'react'
import { MyButton } from './Ui/button/MyButton';
import { MuInput } from './Ui/input/MuInput';

export const PostForm = ({create}) => {
  
  const [post, setPost] = useState({title: '', body: ''})
  const addNewPost = (e) => {
      e.preventDefault();
      const newPost = {
        ...post, id: Date.now(),
      }
      create(newPost);//callback return
      setPost({title: '', body: ''});
  }
    return (
      <form>
        <MuInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Название поста" 
      />
        <MuInput 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="Описание поста" 
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form> 
    );
  };
