import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Board, Container } from "./styles"
import { Card } from "../../components/Card"
import { ModalAddContact } from "../../components/ModalAddContact"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"

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
    const { logout } = useAuth()

    useEffect(() => {
        (async () => {
            const response = await api.get<Contact[]>("contacts")

            setContacts(response.data)
        })()
    }, [])

    const toggleModal = () => setIsOpenModal(!isOpenModal)



    const renderBoard = (contactsToRender: Contact[]) => contactsToRender.map(contact => <Card key={contact.id} contact={contact} setContacts={setContacts}/>) 
     

    return (
        <>
            <Container>
                <header>
                    <h2>Dashboard</h2>
                    <button type="button" onClick={toggleModal}>Adicionar contato</button>
                    <button type="button" onClick={logout}>Sair</button>
                    <Link to="/users">Central de usuários</Link>
                </header>

                {
                    isOpenModal && <ModalAddContact setContact={setContacts} toggleModal={toggleModal}/>
                }

                <main>
                    <Board>{renderBoard(contacts)}</Board>
                </main>
            </Container>
        </>
    )
}