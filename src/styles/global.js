import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color: var(--white);
}

html, body, #root{
    max-height: 100vh;
    max-width: 100vw;

    height:100%;
    width:100%;
}

*, button, input{
    border:0;
    background:none;
    font-family: --apple-system;
}
html{
    background:var(--primary);
}
:root{
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray:#7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6;

}

`