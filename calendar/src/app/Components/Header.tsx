"use client";

import { useRouter } from "next/navigation";

const HeaderPage = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/login');
    }
    return(
        <main>
           <button onClick={handleClick}>
                Click me !
           </button>
        </main>
    );
}
export default HeaderPage;