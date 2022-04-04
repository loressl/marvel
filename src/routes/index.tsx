import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { SearchDetail } from '../pages/SearchDetail'

export const RoutesApplication = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/detail_character' element={<SearchDetail/>} />
        </Routes>
    )
}