import styled from 'styled-components'

export const StyledSearchBar = styled.div`
display: flex;
flex-basis: 25%;
justify-content: center;
align-items: center;
    
input {
    background-color: #f3f3f3;
    width: 100%;
    border-radius: 4px;
    border: none;
    outline: none;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 7px;
}

span{
    background: #f3f3f3 url(https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png) no-repeat -754px 4px;
    background-size: 1404px 105px;
    width: 28px;
    height: 30px;
    display: inline-block;
    border: none;
    border-radius: 4px;
}
`;