import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Board, Container } from "./styles"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { UserCard } from "../../components/UserCard"

export interface User {
    id: string
    name: string
    email: string
    password: string
    phone_number: string
    created_at: Date
}

export const UsersList = () => {
    const [ users, setUsers ] = useState<User[]>([])
    const { logout } = useAuth()

    useEffect(() => {
        (async () => {
            const response = await api.get<User[]>("/users")

            setUsers(response.data)
        })()
    }, [])

    const renderUsers = (usersToRender: User[]) => usersToRender.map(user => <UserCard key={user.id} user={user} setUsers={setUsers}/>) 
     

    return (
        <>
            <Container>
                <header>
                    <h2>Central de Usuários</h2>
                    <button type="button" onClick={logout}>Sair</button>
                    <Link to="/dashboard">Meus contatos</Link>
                </header>
                <main>
                    <Board>{renderUsers(users)}</Board>
                </main>
            </Container>
        </>
    )
}