import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { useForm } from "react-hook-form"
import { UserData, schema } from "./validator"
import { Modal } from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { User } from "../../pages/UsersList"
import { Buttons, Form, Labels } from "../../pages/Login/styles"

interface ModalUpdateDeleteUserProps {
    toggleModalUpdate: () => void
    setUsers: Dispatch<React.SetStateAction<Contact[]>>
    user: User
}

export const ModalUpdateDeleteUser = ({ toggleModalUpdate, setUsers, user }: ModalUpdateDeleteUserProps) => {
    const { register, handleSubmit } = useForm<UserData>({
        resolver: zodResolver(schema)
    })

    const updateUser = async (data: UserData) => {
        await api.patch<User>(`/users/${user.id}`, data)
        const response = await api.get<User[]>("/users")
        setUsers(response.data)
        
        alert("Informações de usuário atualizadas") 
        toggleModalUpdate()
    }

    const deleteUser = async () => {
        await api.delete(`/users/${user.id}`)
        const response = await api.get<User[]>("/users")
        setUsers(response.data)
        
        alert("Usuário excluido")
        toggleModalUpdate()
    }
 
    return (
        <Modal toggleModal={toggleModalUpdate}>
            <h2>Editar Usuário</h2>
            <Form onSubmit={handleSubmit(updateUser)}>
                <Labels>
                    <label htmlFor="text">Nome</label>
                    <input type="text" id="text" {...register("name")}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")}/>

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" {...register("password")}/>

                    <label htmlFor="phone_number">Telefone</label>
                    <input type="text" id="phone_number" {...register("phone_number")}/>
                </Labels>
                <Buttons>
                    <button type="submit">Salvar</button>
                    <button type="submit" onClick={deleteUser} id="exclude_button">Excluir</button>
                </Buttons>
            </Form>
        </Modal>
    )
}