"use client"
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav';

export default function Dashboard() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="h-screen flex overflow-hidden bg-[#edf2f7]">
                <Sidebar isOpen={isOpen} />
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <TopNav toggleSidebar={toggleSidebar} />


                    <div className='p-6'>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>

                            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                                Create Invoice
                            </button> */}
                        </div>

                        <div className="bg-gradient-to-r from-purple-600 to-blue-400 p-6 rounded-xl shadow mb-10">
                            <h2 className="text-2xl font-bold text-white ">
                                Welcome back, Jainul Khan! 👋
                            </h2>
                            <p className="text-white mb-0">
                                Quotes of the day summery 
                            </p>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800 mb-4">Dashboard Statistics</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-5 shadow-lg overflow-hidden">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h2 class="text-lg font-semibold">Total Quotes</h2>
                                        <p class="text-2xl font-bold mt-0">30</p>
                                    </div>
                                    <div class="bg-white/30 p-4 rounded-full text-2xl">
                                        💼
                                    </div>
                                </div>

                                <div class="absolute bottom-0 left-0 w-full">
                                    <svg viewBox="0 0 500 100" class="w-full">
                                        <path d="M0,40 C150,100 350,0 500,60 L500,100 L0,100 Z" fill="rgba(255,255,255,0.3)"></path>
                                    </svg>
                                </div>
                            </div>


                            <div class="relative bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-xl p-5 shadow-lg overflow-hidden">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h2 class="text-lg font-semibold">Total Topics</h2>
                                        <p class="text-2xl font-bold mt-0">26</p>
                                    </div>
                                    <div class="bg-white/30 p-4 rounded-full text-2xl">
                                        📚
                                    </div>
                                </div>

                                <div class="absolute bottom-0 left-0 w-full">
                                    <svg viewBox="0 0 500 100" class="w-full">
                                        <path d="M0,40 C150,100 350,0 500,60 L500,100 L0,100 Z" fill="rgba(255,255,255,0.3)"></path>
                                    </svg>
                                </div>
                            </div>


                            <div class="relative bg-gradient-to-r from-green-600 to-emerald-400 text-white rounded-xl p-5 shadow-lg overflow-hidden">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h2 class="text-lg font-semibold">Total Author</h2>
                                        <p class="text-2xl font-bold mt-0">46</p>
                                    </div>
                                    <div class="bg-white/30 p-4 rounded-full text-2xl">
                                        📄
                                    </div>
                                </div>

                                <div class="absolute bottom-0 left-0 w-full">
                                    <svg viewBox="0 0 500 100" class="w-full">
                                        <path d="M0,40 C150,100 350,0 500,60 L500,100 L0,100 Z" fill="rgba(255,255,255,0.3)"></path>
                                    </svg>
                                </div>
                            </div>


                            <div class="relative bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-xl p-5 shadow-lg overflow-hidden">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h2 class="text-lg font-semibold">Answer Key</h2>
                                        <p class="text-2xl font-bold mt-0">12</p>
                                    </div>
                                    <div class="bg-white/30 p-4 rounded-full text-2xl">
                                        🔑
                                    </div>
                                </div>

                                <div class="absolute bottom-0 left-0 w-full">
                                    <svg viewBox="0 0 500 100" class="w-full">
                                        <path d="M0,40 C150,100 350,0 500,60 L500,100 L0,100 Z" fill="rgba(255,255,255,0.3)"></path>
                                    </svg>
                                </div>
                            </div>


                            <div class="relative bg-gradient-to-r from-purple-600 to-indigo-400 text-white rounded-xl p-5 shadow-lg overflow-hidden">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h2 class="text-lg font-semibold">Admission</h2>
                                        <p class="text-2xl font-bold mt-0">5</p>
                                    </div>
                                    <div class="bg-white/30 p-4 rounded-full text-2xl">
                                        🎓
                                    </div>
                                </div>

                                <div class="absolute bottom-0 left-0 w-full">
                                    <svg viewBox="0 0 500 100" class="w-full">
                                        <path d="M0,40 C150,100 350,0 500,60 L500,100 L0,100 Z" fill="rgba(255,255,255,0.3)"></path>
                                    </svg>
                                </div>
                            </div>


                            <div class="relative bg-gradient-to-r from-fuchsia-600 to-pink-400 text-white rounded-xl p-5 shadow-lg overflow-hidden">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h2 class="text-lg font-semibold">Document</h2>
                                        <p class="text-2xl font-bold mt-0">7</p>
                                    </div>
                                    <div class="bg-white/30 p-4 rounded-full text-2xl">
                                        📋
                                    </div>
                                </div>

                                <div class="absolute bottom-0 left-0 w-full">
                                    <svg viewBox="0 0 500 100" class="w-full">
                                        <path d="M0,40 C150,100 350,0 500,60 L500,100 L0,100 Z" fill="rgba(255,255,255,0.3)"></path>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
