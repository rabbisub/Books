import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const BookDetails = () => {
    const {id}=useParams();
    const bookId=parseInt(id);
    const data = useLoaderData();   
    const singleBook=data.find(book=>book.bookId === bookId)
    console.log(singleBook);
    const {bookName,author,year,pages,language,price,image}=singleBook;

    const handleMarkAsRead =(id)=>{
       MySwal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
        
        addToStoredDB(id);

        
    }
    return (
        <div>
            <h3>Books details</h3>
            <div className="card lg:card-side bg-base-100 shadow-xl"></div>
  <figure><img className='h-[300px] w-[200px]' src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>Author: {author}</p>
    <p>Year of publishing: {year}</p>
        </div>
        <div className='flex gap-4'>
            <button onClick={()=>handleMarkAsRead(id)} className='btn primary'>Mark as Read</button>
        <button className='btn primary '>Add to WishList</button>
        </div>
        </div>
    );
};

export default BookDetails;