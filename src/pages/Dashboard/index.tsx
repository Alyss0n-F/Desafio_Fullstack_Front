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
                    <h1>Meus contatos</h1>
                    <div>
                        <Link to="/users">Central de usuários</Link>
                        <button type="button" onClick={logout} id="logout_button">Sair</button>
                    </div>
                </header>

                {
                    isOpenModal && <ModalAddContact setContact={setContacts} toggleModal={toggleModal}/>
                }

                <main>
                    <button type="button" onClick={toggleModal} id="add_button">Adicionar contato</button>
                    <Board>{renderBoard(contacts)}</Board>
                </main>
            </Container>
        </>
    )
}