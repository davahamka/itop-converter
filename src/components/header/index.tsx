import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";

const Header: FunctionalComponent = () => {
    return (
        <header class="relative bg-white border">
            <div class="px-10 py-4 flex flex-row justify-between">
                <h1>Infix → Postfix</h1>
                <nav>
                    <div class="flex justify-center items-center">
                        <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear">
                            <label
                                for="toggle"
                                class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
                            ></label>
                            <input
                                type="checkbox"
                                id="toggle"
                                name="toggle"
                                class="appearance-none w-full h-full active:outline-none focus:outline-none"
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
