import { ReactNode, useEffect, useRef } from "react"
import { Container } from "./styles"
import { createPortal } from "react-dom"

interface ModalProps {
    toggleModal: () => void
    children: ReactNode
    blockClosing?: boolean
}

export const Modal = ({ children, toggleModal, blockClosing }: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if(!ref.current){
                return
            }

            if(!event.target){
                return
            }

            if(!ref.current.contains(event.target as HTMLElement)) {
                toggleModal()
            }
        }

        window.addEventListener("mousedown", handleClick)
    }, [toggleModal])
    
    return createPortal (
        <Container>
            <div ref={blockClosing ? null : ref}>
                {children}
            </div>
        </Container>, document.body

    )
}