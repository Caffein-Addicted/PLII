import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import Detail from '../Pages/Detail';
import Mypage from '../Pages/Mypage';
import Editprofile from '../Pages/Editprofile';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';
import Error from '../Pages/Error';
import Category from '../Pages/Category';
import Layout from '../Common/Layout/Layout';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/mypage/:id" element={<Mypage />} />
            <Route path="/editprofile/:id" element={<Editprofile />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} /> {/* 맨 아래로 이동 */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
