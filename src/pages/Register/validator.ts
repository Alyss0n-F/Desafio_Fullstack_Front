import { z } from "zod"

export const schema = z.object({
    name: z.string().min(3, "Deve ter no mínimo 3 caracteres"),
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("A senha é obrigatória"),
    phone_number: z.string().nonempty("O número de telefone é obrigatório")
})

export type CreateUserData = z.infer<typeof schema>