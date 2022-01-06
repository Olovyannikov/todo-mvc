import cn from "classnames";
import {MainProps} from "./Main.props";

export const Main = ({children, className, ...props}: MainProps) => {
    return (
        <main className={cn(className)} {...props}>
            {children}
        </main>
    )
}