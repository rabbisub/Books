const getStoredBooks = () => {
    const storedBookSTR=localStorage.getItem('readList');
    if (storedBookSTR) {
        const storedBookData=JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
};

const addToStoredDB =(id)=>{
    const storedBookData=getStoredBooks();
    if(storedBookData.includes(id)){
        alert('Book already marked as read');
    }
    else{
        storedBookData.push(id);
        localStorage.setItem('readList',JSON.stringify(storedBookData));
        
    }
};
export {addToStoredDB, getStoredBooks};