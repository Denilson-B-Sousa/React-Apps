import { Play } from "phosphor-react"
import { FormContainer, HomeContainer, CountdownContainer, Separator } from "./styles"
export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <input id="task"/>
                    <label htmlFor="">Durante</label>
                    <input type="number" id="minuteAmunt"/>
                    <span>Minutos</span>
                </FormContainer>
            </form>

            <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
            </CountdownContainer>

            <button type="submit">
                <Play size={24}/>
                Começar
            </button>
        </HomeContainer>
    )
}