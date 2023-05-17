import { Play } from "phosphor-react"
import { useForm } from 'react-hook-form'
import { FormContainer, HomeContainer, CountdownContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from "./styles"

export function Home() {

    const { register, handleSubmit } = useForm()

    /* (data) --> Dados do nosso formulário */

    function handleCreateNewCycle(data: any) {
        console.log(data)
    }

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        placeholder="Nome do projeto"
                        list="task-suggestions"
                        {...register('task')} /*Função que retorna métodos para trabalhar com inputs ex: Onchange, onBlur, onFocus, onSubmit */
                    />
                    
                    <datalist id="task-suggestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Projeto 4"/>

                    </datalist>
                    <label htmlFor="minuteAmount">Durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minuteAmunt" 
                        placeholder="00"
                        step={5}
                        min={5}
                        max={90}
                        {...register('minutesAmount')}
                    />
                    <span>Minutos</span>
                </FormContainer>
            </form>

            <CountdownContainer >
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
            </CountdownContainer>

            <StartCountdownButton type="submit" /*disabled={!task}*/>
                <Play size={24}/>
                Começar
            </StartCountdownButton>
        </HomeContainer>
    )
}