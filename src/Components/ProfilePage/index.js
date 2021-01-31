import React from 'react'
import { Avatar, Banner, Container, LocationIcon, CakeIcon, ProfileData, Followage } from './ProfilePageElements'

function ProfilePage() {
    return (
        <Container>
            <Banner>
                <Avatar/>
            </Banner>
            <ProfileData>
                {/* <EditButton outlined>Edit Profile</EditButton> */}
                <h1>Marlon D Jesus</h1>
                <h2>@marlondjesus</h2>
                <p>Front End Developer </p>

                <ul>
                    <li>
                        <LocationIcon/>
                        Maputo,Mozambique
                    </li>
                    <li>
                        <CakeIcon/>
                        Born in December 25 of 1995
                    </li>
                </ul>
                <Followage>
                    <span>Following<strong> 105 </strong></span>
                    <span><strong> 2005 </strong>Followers</span>
                </Followage>
            
            </ProfileData>
        </Container>
    )
}

export default ProfilePage
