"use client";

import { useRouter } from "next/navigation";

const HeaderPage = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/login');
    }
    return (
        <main>
          <div className="h-screen flex flex-col justify-center items-center ">
            <button
              onClick={handleClick}
              className="bg-green-500 text-white py-2 px-4 rounded text-center transform transition-transform duration-200 hover:scale-105"
            >
              Get Started!
            </button>
          </div>
        </main>
      );
      
      
}
export default HeaderPage;