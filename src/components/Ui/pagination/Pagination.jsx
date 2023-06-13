import { getPagesArray } from "../../../utils/pages";

export const Pagination = ({totalPages, page, changePage}) => {
  let pagesAray = getPagesArray(totalPages);
  return (
    <div className='page__wrapper'>
    {pagesAray.map(a => 
      <span
        onClick={() => changePage(a)} 
        key={a} 
        className={page === a ? 'page page__current' : 'page'}
      >
        {a}
      </span>
    )}  
  </div>
  )
}
