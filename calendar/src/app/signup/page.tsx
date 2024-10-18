"use client";
import React from "react"
import { useState } from "react";
import { defaultConfig } from "next/dist/server/config-shared";
import axios from "axios";
import Link from "next/link";

const CustomSignUpPage = () => {
    const [name, setName] = useState<String>("")
    const [firstName, setFirstName] = useState<String>("")
    const [birthdate, setBirthdate] = useState<String>("")
    const [email, setEmail] = useState<String>("")
    const [password, setPassword] = useState<String>("")
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const Register = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios("http://localhost:8080/auth/singup" , {
                method: "POST",
                headers : {
                    'Content-Type' : "application/json"
                },
                data: JSON.stringify({ name, firstName, birthdate, email, password}),
            });
            
            if(response.status != 200) {
                const errorData = response.data;
                throw new (errorData.message || "Erreur lors de l'inscription");
            }

            const data = await response.data;
            localStorage.setItem('toke,', data.token);
            setSuccess("Inscription reuissie ! Vous pouvez maintenant connecter.");
            window.location.href = '/login' ;

        }


        catch (error : any) {
            setError(error.message || 'Erreur lors de l\'inscription');
        }
    }
    

return (
    <section className="h-screen flex flex-col items-center justify-center bg-green-500">
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">Agenda</h1> 
            </div>
    <div className="w-full flex flex-col max-w-md p-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={Register}>
        <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom
            </label>
            <input
            type="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre nom"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            Prénom
            </label>
            <input
            type="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre prénom"
            />
        </div>
        <div className="mb-6">
        <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-2">
            Date de naissance
        </label>
        <input
            type="date" 
            id="birthdate"
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre date de naissance"
        />
        </div>

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
            Enregister
            </button>
        </div>
        </form>
        
    </div>
    </section>

    );

}

export default CustomSignUpPage;