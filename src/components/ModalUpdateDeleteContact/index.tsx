import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { useForm } from "react-hook-form"
import { ContactData, schema } from "./validator"
import { Modal } from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"

interface ModalUpdateDeleteContactProps {
    toggleModalUpdate: () => void
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
    contact: Contact
}

export const ModalUpdateDeleteContact = ({ toggleModalUpdate, setContacts, contact }: ModalUpdateDeleteContactProps) => {
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(schema)
    })

    const updateContact = async (data: ContactData) => {
        const response = await api.patch<Contact>(`/contacts/${contact.id}`, data)
        setContacts(previousContacts => [response.data, ...previousContacts])
        
        alert("Contato atualizado") 
        toggleModalUpdate()
    }

    const deleteContact = async () => {
        await api.delete(`/contacts/${contact.id}`)
        const response = await api.get<Contact[]>("/contacts")
        setContacts(response.data)
        
        alert("Contato excluido")
        toggleModalUpdate()
    }
 
    return (
        <Modal toggleModal={toggleModalUpdate}>
            <h2>Atualizar Contato</h2>

            <form onSubmit={handleSubmit(updateContact)}>
                <label htmlFor="text">Nome</label>
                <input type="text" id="text" {...register("name")}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")}/>

                <label htmlFor="phone_number">Telefone</label>
                <input type="text" id="phone_number" {...register("phone_number")}/>

                <button type="submit">Atualizar</button>
                <button type="submit" onClick={deleteContact}>Excluir</button>
            </form>
        </Modal>
    )
}