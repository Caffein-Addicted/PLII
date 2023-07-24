<<<<<<< HEAD
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  text-decoration: none;
  margin-top: 24px;
  color: var(--color-white);
`;

export const SearchText = styled.span`
  font-size: 18px;
  color: var(--color-gray);
  margin-left: 14px;
`;

export const SearchItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
`;

export const VideoItem = styled(Link)`
  margin-right: 20px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 18px;
`;

export const Figure = styled.figure`
  height: 160px;
`;

export const ImgVideo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 8px; */
`;

export const SubTitle = styled.p`
  font-size: 16px;
  margin-top: 6px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--color-white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
=======
import { styled } from 'styled-components';

export const SearchList = styled.div`
  text-aling: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  padding: 20px;
  
`

export const SearchCard = styled.div`  
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 10px;
  padding: 30px;
  min-height: 360px;

`


export const ImgCard = styled.img `
width: 80%;
height: auto;
object-fit: cover;
max-height: 300px;
border-radius: 10px 10px 0 0;
margin-left: 50px;
margin-right: 10px;

  
`
export const CardTitle = styled.p `
  font-size:20px;
  text-align:center;
`

export const ResultNone = styled.div`
  width : 100%;
  height : 500px;
  background-color:white;
  text-align:center;
  margin-top:20px;
  padding-top:50px;
  border-radius : 10px;
`

//searchDetails page

export const DetailCard = styled.div`
  background-color: white;
  width: 800px ;
  height: 500px;
  text-align: center;
  margin-top:20px;
  margin-left:auto;
  margin-right: auto;
  padding:20px;
  border-radius:20px;
`

export const Title =styled.div`
  margin-top:20px;
  margin-bottom:60px;
`
export const BackBtn= styled.button`
  width: 150px;
  height: 20px;
  border-radius:6px;
  float:right;
  
`
>>>>>>> 5be7e782f7cb665d441e321f7f0c8c7d122ca23a
