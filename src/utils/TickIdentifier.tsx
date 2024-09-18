import { TickSymbol } from "../components/TickSymbol"
import { CrossSymbol } from "../components/CrossSymbol"


export const TickIdentifier = (el : boolean) => {
    return el ?  <TickSymbol /> :  <CrossSymbol />
}