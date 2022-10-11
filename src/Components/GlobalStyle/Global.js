import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
    }
    body{
        background-color:${props => (props.mode === true ? '#264158' : '#FFF0CC')};
        color:${props => (props.mode === true ? '#919191' : '#574940')};;
    }


`



export default GlobalStyle