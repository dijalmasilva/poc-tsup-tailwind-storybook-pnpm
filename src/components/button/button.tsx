import React, {ReactNode} from "react";

export type ButtonProps = {
    children: ReactNode
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            className="bg-amber-600 p-2 rounded mt-3 transition-[2000ms] shadow-md hover:shadow-lg hover:bg-amber-900"
                {...props}>
            {children}
        </button>
    )
}

export default Button
