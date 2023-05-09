import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  
    return (
        <LayoutContainer>
            <Header/>
            <Outlet />   {/*Espaço para inserir um determinado conteúdo */}
        </LayoutContainer>
    )
}