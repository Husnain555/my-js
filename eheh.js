import React, { useEffect, useState } from "react";
import axios from "axios"; // You can use fetch or axios

export const ResumeMatrix = () => {
    const [skip,setSkip] = useState(0)
    const [total ,setTotal] = useState(0)

    const [resumeData, setResumeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(''); // State to track the search input

    useEffect(() => {
        const fetchResumeData = async () => {
            try {
                const response = await axios.get(`http://localhost:3015/client/matrics?skip=${skip}&take=10`);
                setResumeData(response.data);
                setTotal(response?.data.total)

                setLoading(false);
            } catch (error) {
                console.error("Error fetching resume data", error);
                setLoading(false);
            }
        };

        fetchResumeData();
    }, []);

    const formatDate = (dateString) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${ampm}`;
    };

    const filteredData = resumeData.filter((resume) =>
        resume.user_slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.browser.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.os.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.ip.includes(searchTerm)
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative p-16 overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Time</th>
                    <th scope="col" className="px-6 py-3">Resume Slug</th>
                    <th scope="col" className="px-6 py-3">Country</th>
                    <th scope="col" className="px-6 py-3">State</th>
                    <th scope="col" className="px-6 py-3">City</th>
                    <th scope="col" className="px-6 py-3">Browser</th>
                    <th scope="col" className="px-6 py-3">Operating System</th>
                    <th scope="col" className="px-6 py-3">IP Address</th>
                    <th scope="col" className="px-6 py-3">Latitude</th>
                    <th scope="col" className="px-6 py-3">Longitude</th>
                </tr>
                </thead>
                <tbody className="mt-4">
                {filteredData.length > 0 ? (
                    filteredData.map((resume, index) => (
                        <tr key={index} className="bg-white m-4 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">{index + 1}</td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {formatDate(resume.date)}
                            </th>
                            <td className="px-6 py-4">{formatTime(resume.date)}</td>
                            <td className="px-6 py-4">{resume.user_slug}</td>
                            <td className="px-6 py-4">{resume.country}</td>
                            <td className="px-6 py-4">{resume.state}</td>
                            <td className="px-6 py-4">{resume.city}</td>
                            <td className="px-6 py-4">{resume.browser}</td>
                            <td className="px-6 py-4">{resume.os}</td>
                            <td className="px-6 py-4">{resume.ip}</td>
                            <td className="px-6 py-4">{resume.latitude}</td>
                            <td className="px-6 py-4">{resume.longitude}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="12" className="text-center py-4">
                            No data available
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <div>


                <div className="flex justify-end align-center text-center py-3">
                    <button onClick={() => {
                        if (skip > 0) setSkip(skip - 2)
                    }}
                            className="flex items-center justify-center px-3 h-8 me-3 text-sm  border rounded-lg  border-blue-100 text-white font-bold bg-black">
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        Previous
                    </button>
                    <button onClick={() => {
                        if (total > skip + 10) setSkip(skip + 2)
                    }}
                            className="flex items-center justify-center px-3 h-8 me-3 text-sm  border rounded-lg  border-blue-100 text-white font-bold bg-black">
                        Next
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>


            </div>
        </div>
    );
};
