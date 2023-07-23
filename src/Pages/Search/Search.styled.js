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