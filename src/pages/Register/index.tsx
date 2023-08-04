import { useForm } from "react-hook-form"
import { CreateUserData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"

export const Register = () => {
    const { register, handleSubmit } = useForm<CreateUserData>({
        resolver: zodResolver(schema)
    })
    const { createUser } = useAuth()

    return (
        <main>
            <h2>Criar conta</h2>

            <form onSubmit={handleSubmit(createUser)}>
                <label htmlFor="text">Nome</label>
                <input type="text" id="text" {...register("name")}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")}/>

                <label htmlFor="phone_number">Telefone</label>
                <input type="text" id="phone_number" {...register("phone_number")}/>

                <button type="submit">Cadastre-se</button>
            </form>

            <Link to="/">Voltar para login</Link>
        </main>

    )
}