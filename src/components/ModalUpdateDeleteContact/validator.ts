import { z } from "zod"

export const schema = z.object({
    name: z.string().min(3, "Deve ter no mínimo 3 caracteres").optional(),
    email: z.string().email("Deve ser um e-mail").optional(),
    password: z.string().nonempty("A senha é obrigatória").optional(),
    phone_number: z.string().nonempty("O número de telefone é obrigatório").optional()
})

export type ContactData = z.infer<typeof schema>