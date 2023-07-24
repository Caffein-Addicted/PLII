import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { decode } from 'url-safe-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../Redux/UserInfo';
import { YoutubeDataContext } from '../../context/YoutubeDataContext';
import { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import * as S from './Mypage.styled';

const Mypage = () => {
  const { videosList, playlists } = useContext(YoutubeDataContext);

  const auth = getAuth();
  const user = auth.currentUser;
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const getRandomIndex = (legth) => {
    return parseInt(Math.random() * legth);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  useEffect(() => {
    fetchUserData();
  });
  const fetchUserData = async () => {
    const dbUsers = query(collection(db, 'users'), where('email', '==', atob(decode(params.id))));

    const usersData = [];

    const userSnapshot = await getDocs(dbUsers);
    userSnapshot.forEach((doc) => {
      usersData.push(doc.data());
    });
    dispatch(getUserInfo(...usersData));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('로그아웃 성공');
      // 로그아웃 후에 필요한 추가적인 작업을 수행할 수 있습니다.
      window.location.replace('/');
    } catch (error) {
      console.error('로그아웃 실패:', error.message);
    }
  };

  return (
    <>
      <div>
        <S.PlaylistTitle>마이페이지</S.PlaylistTitle>
        {user ? (
          <>
            <div>
              {/* 프로필 이미지 표시 */}
              <img
                src={userInfo.imgfile ? userInfo.imgfile : '/user.png'}
                alt="프로필 사진"
                style={{ width: '100px', height: '100px' }}
              />
              <S.MypageText>이메일: {userInfo.email}</S.MypageText>
              <S.MypageText>이름: {userInfo.name}</S.MypageText>
              <button onClick={handleLogout}>로그아웃</button>
              {/* 프로필 설정 페이지로 이동하는 버튼 */}
              <Link to={`/editprofile/${params.id}`}>프로필 설정</Link>
            </div>
            <div>
              <S.Title>{userInfo.name} 님을 위한 추천 플레이리스트</S.Title>
              <S.PlaylistTitle>{playlists[3].snippet.title}</S.PlaylistTitle>
              <Carousel
                autoPlay
                autoPlaySpeed={2000}
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
              >
                {videosList[playlists[3].id].map((video) => {
                  return (
                    <div>
                      <div key={video.id}>
                        <img src={video.snippet.thumbnails.medium.url} />
                        <p>{video.snippet.title}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </>
        ) : (
          <p>로그인이 필요합니다.</p>
        )}
      </div>
    </>
  );
};

export default Mypage;
