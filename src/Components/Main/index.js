import React from 'react'
import ProfilePage from '../ProfilePage'
import { BackIcon, BottomMenu, Container, Header, HomeIcon, NotificationIcon, ProfileInfo, EmailIcon, SearchIcon } from './MainElements'

function Main() {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon/>
                </button>
                <ProfileInfo>
                    <strong>
                        Marlon D Jesus
                        </strong>
                    <span>612 Tweets</span>
                </ProfileInfo>
            </Header>
            <ProfilePage/>
            <BottomMenu>
                <HomeIcon className="active"/>
                <SearchIcon/>
                <NotificationIcon/>
                <EmailIcon/>
            </BottomMenu>
            
        </Container>
    )
}

export default Main
