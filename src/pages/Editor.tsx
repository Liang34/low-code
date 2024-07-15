import { useStore } from "../store"




export default function Editor() {
    const bears = useStore((state) => state?.bears)
    return (
        <div>{bears}</div>
    )
}