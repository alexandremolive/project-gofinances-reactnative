import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.background };

`;

export const Title = styled.Text`
font-family: ${({theme})=> theme.fonts.medium};
color: ${({theme}) => theme.colors.title};
font-size: 24px;
font-weight: bold;
`;