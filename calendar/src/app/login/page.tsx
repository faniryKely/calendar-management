"use client";
import React from "react";
import { useEffect, useState } from "react"; 
import Link from "next/link";
import axios from "axios";


const CustomLoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>(""); 
    const [error, setError] = useState<String>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios("http://localhost:8080/auth/login", {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                data: JSON.stringify({email, password}),
            });

            if (response.status != 200) {
                throw new Error ("Invalid login credentials")
            }

            const data =  await response.data;
        
            localStorage.setItem('token', data.token);
            console.log("Vous etes connecté : ", data)
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
            window.location.href = ("/Users")
        }
        catch (error: any) {
            setError(error.message || 'Erreur lors de la connexion : identifiants invalides'); 
        }
    }

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-green-500 bg-opacity-100">
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">Agenda</h1> 
         </div>
    <div className="w-full flex flex-col max-w-md p-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Adresse Email
            </label>
            <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre adresse email"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Mot de Passe
            </label>
            <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre mot de passe"
            />
        </div>
        <div className="text-center">
            <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-purple-600 transition-colors duration-300">
            Se connecter
            </button>
        </div>
        </form>
        <div className="flex flex-nowrap justify-between mt-8" >
            <div >
                <Link href={'/Users'}><h1 className="text-black">Mot de passe oublier</h1></Link>
            </div>
            <div>
                <Link href={'/singup'}><h1 className="text-purple-600">Creer un compte</h1></Link>
            </div>
        </div>
    </div>
    </section>

  );

}
export default CustomLoginPage;
