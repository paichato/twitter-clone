import React from 'react'
import Main from '../Main'
import { Container, Wrapper } from './LayoutElements'

function Layout() {
    return (
        <>
        <Container>
            <Wrapper>
                {/* <Menubar/> */}
                <Main/>
                {/* <SideBar/> */}

                
            </Wrapper>
        </Container>
            
        </>
    )
}

export default Layout
