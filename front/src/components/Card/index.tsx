import { Contact } from "../../pages/Dashboard"
import { Container } from "./styles"

interface CardProps {
    contact: Contact
}

export const Card = ({ contact }: CardProps) => {
    return (
        <Container>
            {contact.name}
        </Container>
    )
}