import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [sort,setSort]=useState('');


    const [readList, setReadList]=useState([]);
    const data= useLoaderData();
    console.log(data);
   
    useEffect(()=>{
        const storedBookData=getStoredBooks();
        console.log(storedBookData);
        const ConvertedStoredBooks=storedBookData.map(id=>parseInt(id));
        console.log(ConvertedStoredBooks);
        const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
        
        console.log(myReadList);
        setReadList(myReadList);
    },[])

const handleSort=(type)=>{
    setSort(type);

    if(type==="Pages"){
        const sortedbyPages=[...readList].sort((a,b)=>a.totalPages-b.totalPages);
        setReadList(sortedbyPages);
    }
    if(type==="Rating"){
        const sortedbyRating=[...readList].sort((a,b)=>a.rating-b.rating);
        setReadList(sortedbyRating);
    }


}


    return (
        <div>
            <details className="dropdown">
  <summary className="btn m-1">Sort by:{sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("Rating")}>Rating</a></li>
  </ul>
</details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>
                <TabPanel>
                    <h2>Book read  {readList.length}</h2>
                    {
                        readList.map(b=><Book singleBook={b} key={b.bookId}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;