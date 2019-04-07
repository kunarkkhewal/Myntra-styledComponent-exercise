import styled from 'styled-components';

export const UserList=styled.span`
background: ${props=>`url(https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png) no-repeat ${props.userobj.OffsetX} ${props.userobj.OffsetY}`};
width: ${props=>props.userobj.width};
height: ${props=>props.userobj.height};
zoom: 0.6 ;
display: flex;
justify-content: space-between;
align-items: center;
flex-basis:15%;
`;

export const User=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-basis:12%;
list-style-type: none;
`;

export const IconText = styled.span`
font-size: 12px;
`;