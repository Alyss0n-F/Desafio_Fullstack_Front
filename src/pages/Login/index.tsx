import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { Buttons, Container, Form, Labels } from "./styles"

export const Login = () => {
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    const { signIn } = useAuth()

    return (
        <Container>
                <h2>Login</h2>
            <Form onSubmit={handleSubmit(signIn)}>
                <Labels>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")}/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" {...register("password")}/>

                </Labels>
                <Buttons>
                    <button type="submit">Entrar</button>
                    <Link to="/register">Criar nova conta</Link>
                </Buttons>
            </Form>
        </Container>

    )
}