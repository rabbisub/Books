import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    const {bookName, image,rating,category,tags,yearOfPublishing,publisher,bookId}=singleBook;



    return (
        <Link to={`/booDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-3 bg-gray-200 w=2/3 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-10'>
        {tags.map(tag=><button>{tag} </button>)}
    </div>
    
    <h2 className="card-title">{bookName}
      
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by: {publisher}</p>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;