import styled, {css} from 'styled-components';
import {LocationOn, Cake} from '../../styles/Icons'

export const Container=styled.div`
display:flex;
flex-direction:column;
max-height:100%;
overflow-y:auto; //to scroll when its too big
scrollbar-width:none;
::-webkit-scrollbar{
display:none;
}
`
export const Banner=styled.div`

`
export const Avatar=styled.div`

`
export const ProfileData=styled.div`

`
const iconCSS=css`
width:20px;
height:20px;

color:var(--gray);
`
export const LocationIcon=styled(LocationOn)`
${iconCSS}
`
export const CakeIcon=styled(Cake)`
${iconCSS}
`
export const Followage=styled.div`

`

