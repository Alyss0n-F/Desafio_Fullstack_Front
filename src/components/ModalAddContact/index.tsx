import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { useForm } from "react-hook-form"
import { ContactData, schema } from "./validator"
import { Modal } from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"

interface ModalAddContactProps {
    toggleModal: () => void
    setContact: Dispatch<React.SetStateAction<Contact[]>>
}

export const ModalAddContact = ({ toggleModal, setContact }: ModalAddContactProps) => {
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(schema)
    })

    const createContact = async (data: ContactData) => {
        const response = await api.post<Contact>("/contacts", data)

        setContact(previousContacts => [response.data, ...previousContacts])
        alert("Contato adicionado")
        toggleModal()
    }
 
    return (
        <Modal toggleModal={toggleModal}>
            <form onSubmit={handleSubmit(createContact)}>
                <label htmlFor="text">Nome</label>
                <input type="text" id="text" {...register("name")}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")}/>

                <label htmlFor="phone_number">Telefone</label>
                <input type="text" id="phone_number" {...register("phone_number")}/>

                <button type="submit">Cadastrar</button>
            </form>
        </Modal>
    )
}