import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage';
import Pagination from './utility/Pagination';
import Search from './searchUI/Search';
import DebouncedSearch from './searchUI/DebouncedSearch';
const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/pagination' element={<Pagination />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/debouncedsearch' element={<DebouncedSearch/>}/>
            {/* <Route path="/gallery" element={<DetailCardPage />}>
              <Route path=":cardId" element={<DetailCard />} />
            </Route> */}
          </Routes>
      </BrowserRouter>
    );
  };

export default Router;