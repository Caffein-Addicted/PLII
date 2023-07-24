import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import Detail from '../Pages/Detail';
import Mypage from '../Pages/Mypage/Mypage';
import Editprofile from '../Pages/Editprofile';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';
import Error from '../Pages/Error';
import Category from '../Pages/Category';
import Layout from '../Common/Layout/Layout';
import Search from '../Pages/Search/Search';
import PlayList from '../Pages/PlayList';
import SearchDetail from '../Pages/Search/SearchDetail';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/playlist/:playlistId" element={<PlayList />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/detail/:videoId" element={<Detail />} />
            <Route path="/mypage/:id" element={<Mypage />} />
            <Route path="/editprofile/:id" element={<Editprofile />} />
            <Route path="/search/:inputValue" element={<Search />} />
            <Route path="/video/:videoId" element={<SearchDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
