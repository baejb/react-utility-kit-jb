import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage';
import Pagination from './utility/Pagination';
import Search from './searchUI/Search';
import DebouncedSearch from './searchUI/DebouncedSearch';
import ReactQuery from './reactquery/ReactQuery';
import { ReactQueryDevtools } from 'react-query/devtools'
const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/pagination' element={<Pagination />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/debouncedsearch' element={<DebouncedSearch/>}/>
            <Route path='/reactquery' element={<ReactQuery/>}/>
            {/* <Route path="/gallery" element={<DetailCardPage />}>
              <Route path=":cardId" element={<DetailCard />} />
            </Route> */}
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </BrowserRouter>
    );
  };

export default Router;