import { Dispatch, useState } from "react"
import { Contact } from "../../pages/Dashboard"
import { Container } from "./styles"
import { User } from "../../pages/UsersList"
import { ModalUpdateDeleteUser } from "../ModalUpdateDeleteUser"

interface UserCardProps {
    user: User
    setUsers: Dispatch<React.SetStateAction<Contact[]>>
}

export const UserCard = ({ user, setUsers }: UserCardProps) => {

    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
    const toggleModalUpdate = () => setIsOpenModalUpdate(!isOpenModalUpdate)

    return (
        <>
            {   
                isOpenModalUpdate && <ModalUpdateDeleteUser user={user} setUsers={setUsers} toggleModalUpdate={toggleModalUpdate}/>
            }

            <Container onClick={toggleModalUpdate}>
                {user.name}
            </Container>
        </>

    )
}