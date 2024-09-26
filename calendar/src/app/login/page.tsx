"use client";
import React from "react";

const CustomLoginPage = () => {

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Ajouter ici votre logique de gestion de la connexion
//     console.log("Login button clicked");


  return (
    <section className="h-screen flex flex-col items-center justify-center bg-green-500 bg-opacity-100">
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">Calendrier</h1> 
         </div>
    <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <form>
        <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Adresse Email
            </label>
            <input
            type="email"
            id="email"
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
    </div>
    </section>

  );

}
export default CustomLoginPage;
