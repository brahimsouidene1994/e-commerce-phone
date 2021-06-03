import Styled from 'styled-components';

const ButtonContainer = Styled.button`
    text-transform : capitalize;
    font-size : 1.4rem;
    background : transparent;
    border-color : ${props =>
        props.btn_cart?"var(--mainYellow)" : "var(--lightBlue)"};
    color : ${props =>
        props.btn_cart?"var(--mainYellow)" : "var(--lightBlue)"};
    border-radius : 0.5rem;
    padding : 0.2rem 0.3rem;
    cursor : pointer;
    margin : 0.2rem 0.3rem 0.5rem 0;
    transition :all 0.5s ease-in-out;
    &:hover {
        background : ${props =>
            props.btn_cart?"var(--mainYellow)" : "var(--lightBlue)"};
        color : var(--mainBlue);
        font-weight : bold;
    }
    &:focus{
        outline : none;
    }
`
export default ButtonContainer;