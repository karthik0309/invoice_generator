import React, { lazy,Suspense } from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'

const Home = lazy(()=>import('./pages/home/Home'))
const Invoice = lazy(()=>import('./pages/invoice/Invoice'))


const Router = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<h1>loading...</h1>}>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Invoice/>} path="/invoice"/>
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default Router