import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { SearchDetail } from '../pages/SearchDetail'

export const RoutesApplication = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<NotFound/>} />
                <Route path='/search_detail' element={<SearchDetail/>} />
            </Routes>
        </BrowserRouter>
    )
}