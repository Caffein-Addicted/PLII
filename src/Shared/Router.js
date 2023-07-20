import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import Detail from '../Pages/Detail';
import Mypage from '../Pages/Mypage';
import Editprofile from '../Pages/Editprofile';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';
import Error from '../Pages/Error';
import Category from '../Pages/Category';
import Layout from '../Common/Layout';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="/category/:id"
            element={
              <Layout>
                <Category />
              </Layout>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Layout>
                <Detail />
              </Layout>
            }
          />
          <Route
            path="/mypage/:id"
            element={
              <Layout>
                <Mypage />
              </Layout>
            }
          />
          <Route
            path="/edit-profile/:id"
            element={
              <Layout>
                <Editprofile />
              </Layout>
            }
          />
          <Route path="*" element={<Error />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
