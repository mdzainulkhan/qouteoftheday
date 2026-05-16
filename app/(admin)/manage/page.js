"use client"
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav';
import { ArchiveX, ArrowRight, DeleteIcon, Edit, Eye, FunnelX } from 'lucide-react';

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


                    <div className="p-6">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Manage Data</h2>

                            
                        </div>


                        <div className="bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-xl p-6 shadow-lg flex justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-bold">Manage Data</h1>
                                <p className="text-sm text-gray-200 mt-1">Publish and manage all data.</p>
                            </div>
                            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium shadow hover:bg-gray-100 cursor-pointer">
                                + Add New
                            </button>
                        </div>


                        <div className="bg-white mt-6 p-6 rounded-xl shadow">
                            <div className="flex flex-col lg:flex-row gap-4 mb-6">
                                <select className="border border-gray-300 rounded-lg px-4 py-2 w-full lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>All Categories</option>
                                    <option>Admission</option>
                                    <option>Admit Card</option>
                                    <option>Result</option>
                                </select>


                                <input
                                    type="text"
                                    placeholder="Search (min 3 characters)"
                                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />


                                <button className="border border-gray-300 px-4 py-2 lg:w-1/6 rounded-lg hover:bg-gray-100 flex gap-1 items-center cursor-pointer">
                                   <FunnelX size={18} /> Reset Filters
                                </button>

                            </div>


                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="border-b text-gray-700 font-semibold">
                                        <tr>
                                            <th className="py-3 w-[5%]">S.No.</th>
                                            <th className=' w-[10%]'>Topics</th>
                                            <th>Quotes</th>
                                            <th>Background-image</th>
                                            <th>Author's name</th>
                                            <th>Authors D.O.B</th>
                                            <th>Author's Death</th>
                                            <th>Author's born city:</th>
                                            <th>Profession</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-gray-700">

                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="py-4">1.</td>
                                            <td className="text-[14px]">IMU CET Admission Form 2026</td>
                                            <td>
                                                <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-md">
                                                    Admission
                                                </span>
                                            </td>
                                            <td>1</td>
                                            <td>15 Feb 2026</td>
                                            <td>adfs</td>
                                            <td>asdf</td>
                                            <td>asdf</td>
                                            <td></td>
                                            <td className="flex gap-3 items-center mt-3.5">
                                                <button className="text-blue-600 hover:text-blue-800 cursor-pointer"><Eye  color='blue' size={18}/></button>
                                                <button className="text-green-600 hover:text-green-800 cursor-pointer"><Edit color="green" size={18} /></button>
                                                <button className="text-red-600 hover:text-red-800 cursor-pointer"><ArchiveX color='red' size={18}/></button>
                                            </td>
                                        </tr>

                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="py-4">2.</td>
                                            <td className="text-[14px]">RRB NTPC Graduate Level CBT 1 Exam Date 2026</td>
                                            <td>
                                                <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-md">
                                                    Admit Card
                                                </span>
                                            </td>
                                            <td>5810</td>
                                            <td>15 Feb 2026</td>
                                            <td>adfs</td>
                                            <td>asdf</td>
                                            <td>asdf</td>
                                            <td></td>
                                            <td className="flex gap-3 items-center mt-3.5">
                                                <button className="text-blue-600 hover:text-blue-800 cursor-pointer"><Eye  color='blue' size={18}/></button>
                                                <button className="text-green-600 hover:text-green-800 cursor-pointer"><Edit color="green" size={18} /></button>
                                                <button className="text-red-600 hover:text-red-800 cursor-pointer"><ArchiveX color='red' size={18}/></button>
                                            </td>
                                        </tr>

                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="py-4">3.</td>
                                            <td className="text-[14px]">CSBC Bihar Police Driver Constable PET admit card 2026</td>
                                            <td>
                                                <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-md">
                                                    Admit Card
                                                </span>
                                            </td>
                                            <td>4361</td>
                                            <td>15 Feb 2026</td>
                                            
                                            <td>adfs</td>
                                            <td>asdf</td>
                                            <td>asdf</td>
                                            <td></td>
                                            <td className="flex gap-3 items-center mt-3.5">
                                                <button className="text-blue-600 hover:text-blue-800 cursor-pointer"><Eye  color='blue' size={18}/></button>
                                                <button className="text-green-600 hover:text-green-800 cursor-pointer"><Edit color="green" size={18} /></button>
                                                <button className="text-red-600 hover:text-red-800 cursor-pointer"><ArchiveX color='red' size={18}/></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
