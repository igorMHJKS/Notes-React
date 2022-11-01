import {RiShutDownLine} from 'react-icons/ri'

import {Container, Profile, Logout }from './styles'
import {Link } from 'react-router-dom'

export function Header(){
    return(
        <Container>
            <Profile to="/Profile">
                <img src="https://github.com/igorMHJKS.png" alt="" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Igor Nunes Gonçalves</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}