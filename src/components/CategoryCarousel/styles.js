import styled from "styled-components";


export const Container = styled.div`
    background-color:#efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 30px 0;

    .rec.rec-arrow{
        background: #9758a6;
        color: #efefef;
    }
    .rec.rec-arrow:hover{
      border: 2px solid #9758a6 ;
      background-color: #efefef;
      color: #9758a6;
    }

    .rec.rec-arrow:disabled{
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`


export const CategoryImg = styled.img`
    

`
export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;

`
export const Image = styled.img`
    width: 240.05px;
    height: 231.99px;
    top: 0.01px;
    left: 673.51px;
    gap: 10px;
    opacity: 0px;


`
export const Button = styled.button`
    margin-top: 16px;
    background: #9758a6;
    box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22), 0px 20px 40px rgba(151, 88, 166, 0.24);
    border-radius: 8px;
    height: 50px;
    border:none;
    color: white;
    font-weight: bold;
    line-height: 100%;
    text-align: center;
    font-size: 18px;
    cursor: pointer;


`




    

