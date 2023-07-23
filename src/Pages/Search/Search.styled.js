import { styled } from 'styled-components';

export const SearchList = styled.div`
  text-aling: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  
`

export const SearchCard = styled.div`  
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 10px;
  padding: 20px;
  min-height: 360px;

`


export const ImgCard = styled.img `
width: 80%;
height: auto;
object-fit: cover;
max-height: 300px;
border-radius: 10px 10px 0 0;
margin-left: 50px;

  
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
// .card {
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   margin: 10px;
//   padding: 20px;
//   min-height: 360px;
// }

// .card img {
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   max-height: 300px;
//   border-radius: 10px 10px 0 0;
// }

// .card h3 {
//   font-size: 18px;
//   font-weight: bold;
//   margin: 10px 0;
//   padding: 0 10px;
// }
// .carousel-container {
//   padding-left: 0px;
//   padding-right: 15px;
// }

// .carousel-item-padding {
//   padding: 0px 0px;
//   display: flex;
//   justify-content: center;
// }