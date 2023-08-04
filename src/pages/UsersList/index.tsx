import { Link } from "react-router-dom"

export const UsersList = () => {
    return (
        <>
            <h1>Central de usuarios</h1>
            <Link to="/dashboard">Voltar para dashboard</Link>
        </>
    )
}