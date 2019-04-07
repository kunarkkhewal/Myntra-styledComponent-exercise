import styled from 'styled-components';

export const Deals = styled.div`
display: flex;
justify-content: space-evenly;
padding: 10px;
`;

export const Deal = styled.div`
display: flex;
width: 22%;
background: ${props => `url(${props.image})`};
height: 200px;
background-size: cover;
}
`;
