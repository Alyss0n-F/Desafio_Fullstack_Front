import { useForm } from "react-hook-form"
import { CreateUserData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { Buttons, Container, Form, Labels } from "./styles"

export const Register = () => {
    const { register, handleSubmit } = useForm<CreateUserData>({
        resolver: zodResolver(schema)
    })
    const { createUser } = useAuth()

    return (
        <Container>
            <h2>Criar conta</h2>

            <Form onSubmit={handleSubmit(createUser)}>
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
                    <button type="submit">Cadastre-se</button>
                    <Link to="/">Voltar para login</Link>
                </Buttons>
            </Form>

        </Container>

    )
}