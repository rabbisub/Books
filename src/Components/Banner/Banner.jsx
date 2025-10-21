import React from 'react';
import bookImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-around items-center w-full h-[350px] p-16 border-none rounded-lg bg-slate-200 mt-10 mb-10'>
            <div>
                <h1>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img className='w-[250px] h-[250px]' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;