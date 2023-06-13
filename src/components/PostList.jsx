import React, { useState } from 'react'
import {PostItem} from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const PostList = ({posts, title, remove}) => {
  if(!posts.length) {
    return (
      <h2 className='post_none'>Посты не найдены</h2>
    )
  }

  return (
  <div>
    <h2>{title}</h2>
    <TransitionGroup>
      {posts.map((post, index) =>
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
        >
          <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
        </CSSTransition>
      )}
    </TransitionGroup>
  </div>
  )
}
 