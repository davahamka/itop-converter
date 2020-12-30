import { FunctionalComponent, h } from "preact";

interface ButtonProps {
    onClick?: any;
}

const Button: FunctionalComponent<ButtonProps> = ({ onClick, children }) => {
    return (
        <button class="bg-indigo-700 py-1 px-3 md:py-2 md:px-4 rounded text-white" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
