import styled from 'styled-components';

export default styled.button`
background: ${ props=>(props.outlined?'transparent':'var(--twitter')};
color: ${props=>props.outlined?'var(--twitter':'var(--white)'};
border:${props=>props.outlined?'1px solid var(--twitter)':'none'};



`
