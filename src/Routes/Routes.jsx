import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Components/About/About';
import BookDetails from '../Components/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:< ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('booksData.json'),
            path:'/',
            Component:Home
        },
        {
          path:'/about',
            loader:()=>fetch('booksData.json'),
          Component:About
        },
        {
          path:'/readlist',
          loader:()=>fetch('booksData.json'),
          Component: ReadList
        },
        {
          path:'/booDetails/:id',
          loader:()=>fetch('booksData.json'),
          Component:BookDetails
        }
    ]
  },
]);
