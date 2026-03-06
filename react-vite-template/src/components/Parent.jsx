import Button from "./Button"
import Children from "./Children"

export default function Parent() {
    return (
        <Children>
            <Button>Кнопка внутри children</Button>
        </Children>
    )
}