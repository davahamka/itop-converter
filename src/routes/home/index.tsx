import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import { infixToPostfix } from "../../helpers/utils";
import Button from "../../components/button";


const Home: FunctionalComponent = () => {
    const [values, setValue] = useState("");
    const [res, setResult] = useState("");

    const handleSubmit = (e?: any) => {
        e.preventDefault();
        setResult(infixToPostfix(values));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    };
    return (
        <section class="my-4 p-4">
            <div class="flex flex-col items-center text-center">
                <p class="text-xl font-bold md:text-3xl">
                    Simple Infix to Postfix Converter
                </p>
                <p class="text-sm md:text-md mt-2">
                    Enter the infix expression into the box and convert it!
                </p>
                <form onSubmit={e => handleSubmit(e)}>
                    <div class=" my-4">
                        <input
                            type="text"
                            value={values}
                            onKeyDown={handleKeyDown}
                            onChange={e =>
                                setValue(
                                    e.currentTarget.value.replace(/\s/g, "")
                                )
                            }
                            placeholder=""
                            class="border border-gray-400 rounded w-full px-2 py-2"
                        />
                    </div>
                    <Button onClick={() => handleSubmit()}>Convert</Button>
                </form>
                <p class="my-4 md:text-2xl">
                    Postfix: <span class="font-bold">{res}</span>
                </p>
            </div>
        </section>
    );
};

export default Home;
