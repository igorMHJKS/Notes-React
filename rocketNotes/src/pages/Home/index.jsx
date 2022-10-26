import {FiPlus, FiSearch} from 'react-icons/fi'
 
import {Container, Brand, Menu, Search, Content,NewNote }from './styles'

import {Header} from '../../components/Header'
import {ButtonText} from '../../components/Buttontext'
import {Input} from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import React from 'react'





export function Home (){
    return(

        <Container>
            <Brand>
              <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            
            <Menu>

               <li><ButtonText title="Todos" insActive/></li>
               <li><ButtonText title="React"/></li>
               <li><ButtonText title="Node.js"/></li>

            </Menu>

            <Search>
              <Input placeholder='Pesquisar por Título'icon={FiSearch} />
            </Search>

            <Content>
              <Section title="Minhas Notas">
                 <Note data={{ title: "React", tags: [{id: 1, name: "React"},
                 { id: 2, name: "node"}
                ]} }/>

              </Section>
            </Content>

            <NewNote>


              <FiPlus/>
              Criar nota
            </NewNote>
        </Container>
    )
}