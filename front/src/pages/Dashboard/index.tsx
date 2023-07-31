import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Board, Container } from "./styles"
import { Card } from "../../components/Card"

export interface Contact {
    id: string
    name: string
    email: string
    password: string
    phone_number: string
    created_at: Date
}

export const Dashboard = () => {
    const [ contacts, setContacts ] = useState<Contact[]>([])
    const [ isOpenModal, setIsOpenModal ] = useState(false)

    useEffect(() => {
        (async () => {
            const response = await api.get<Contact[]>("contacts")

            setContacts(response.data)
        })()
    }, [])

    const toggleModal = () => setIsOpenModal(!isOpenModal)
    const renderBoard = (contactsToRender: Contact[]) => contactsToRender.map(contact => <Card key={contact.id} contact={contact}/>)    

    return (
        <>
            <Container>
                <header>
                    <button type="button">Adicionar contato</button>
                </header>

                <main>
                    <Board>{renderBoard(contacts)}</Board>
                </main>
            </Container>
        </>
    )
}