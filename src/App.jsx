import React from "react";
import profilePic from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 ">
      <div className="bg-gray-300 rounded-2xl shadow-lg max-w-md w-full p-6 text-center h-200">
        <img
          src={profilePic}
          alt="Profile"
          className="w-24 h-26 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2 font-times">
          NANCY
        </h1>
        <p className="text-gray-700 text-xs mb-4 font-italic font-georgia">
          An enthusiastic web development fresher with a strong desire to learn,
          grow, and create meaningful digital experiences. I’m passionate about
          building user-friendly websites and constantly expanding my skills
        </p>
          <h2 className="text-lg font-semibold text-black mb-2 font-times">
            HOBBIES
          </h2>
          <ul className="list-disc list-inside font-georgia text-xs text-centre text-gray-700">
            <li>Singing</li>
            <li>Dancing</li>
            <li>Exploring</li>
          </ul>
      </div>
    </div>
  );
}
