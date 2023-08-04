import { Dispatch, useState } from "react"
import { Contact } from "../../pages/Dashboard"
import { ModalUpdateDeleteContact } from "../ModalUpdateDeleteContact"
import { Container } from "./styles"

interface CardProps {
    contact: Contact
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

export const Card = ({ contact, setContacts }: CardProps) => {

    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
    const toggleModalUpdate = () => setIsOpenModalUpdate(!isOpenModalUpdate)

    return (
        <>
            {   
                isOpenModalUpdate && <ModalUpdateDeleteContact contact={contact} setContacts={setContacts} toggleModalUpdate={toggleModalUpdate}/>
            }

            <Container onClick={toggleModalUpdate}>
                {contact.name}
            </Container>
        </>

    )
}