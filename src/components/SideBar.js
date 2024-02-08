import React, { useState,useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard,MdLogout,MdSubdirectoryArrowLeft } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import NavbarQucikAction from "./Navbar";
import { FaAngleDown } from "react-icons/fa";
import {getallProducts,} from '../API/productAPI'
import {socialiconsentiment} from './data'

import FollowerStats from "./TopSummaryStats/FollowerStats";
import SentimentsScoreStats from "./TopSummaryStats/SentimentsScoreStats";
import SocialMediaSentimentalTimeline from "./TopSummaryStats/SocialmediaSentimentalTimeline";
import SentimentcategoryTimeline from "./TopSummaryStats/SentimentcategoryTimeline";
import ScatterLinePlot from "./charts/ScatterLinePlot ";

const AdminDash = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [open, setOpen] = useState(true);

  const [data,setData]=useState([])

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [uniqueCategories, setUniqueCategories] = useState([]);
// const navigate=useNavigate()

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(()=>{
    async function getData() {
      try {
        const product = await getallProducts();
        setData(product);

            // Extract unique categories
            const categories = [...new Set(product.map(item => item.category))];
            setUniqueCategories(categories);
      } catch (error) {
        console.log('Error in fetching data:', error);
     
      }
    }

    getData();
  },[data])
  return (
    <section className="flex ">
      {/* Sidebar starts here*/}
      <div
        className={`bg-[#0e0e0e] min-h-screen    ${
          open ? "w-48" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        {/* <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div> */}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className="py-3 flex justify-end ">
          <MdLogout
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <main className="flex-1  ">
        <div className="flex flex-col overflow-y-auto">
          <NavbarQucikAction />
          {/* Showing analysis nav2 starts here */}
          <div className="w-full px-2 bg-gray-200 h-20">
            <div className="w-full h-full flex items-center justify-between">
              <div className="flex ">
                <p>
                  Showing analysis for
                  <span className="px-2">
                    <select>
                      <option>Nestle</option>
                      <option>Amul</option>
                      <option>Sunfeast</option>
                    </select>
                  </span>
                </p>
              </div>
              <div className="flex px-2">
                {" "}
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 mx-2 text-sm font-medium  shadow-sm "
                >
                  <span>Twitter Heatmap</span>
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span>Social Summary Stats</span>
                </button>
                <button
                  type="button"
                  className="ml-2 relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span>Insight KPIs</span>
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex items-center pl-1 text-sky-700 cursor-pointer font-semibold">
                  {" "}
                  <span>
                    <MdSubdirectoryArrowLeft />
                  </span>
                  <span>Back to search</span>
                </div>
              </div>
            </div>
          </div>

          {/* Showing analysis nav2 ends  here */}

          {/* Summary Stats search starts here */}
          <div className="w-full py-4 px-2">
            <div className="relative w-full">
            <div className="w-full ">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-gray-200 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              {/* <select
                className="w-full  border-2  rounded-md py-1.5 px-2   focus:ring-0 sm:text-sm sm:leading-6"
                value={sortBy}
                onChange={handleFilterSelect}
              >
                <option value="">Real time World heatmap</option>
                {uniqueCategories.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="text-gray-600 py-2"
                  >
                    {option}
                  </option>
                ))}
              </select> */}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full  px-2">
              <div className="relative w-full">
                <select
                  className="w-full  border-2  rounded-md py-1.5 px-2   focus:ring-0 sm:text-sm sm:leading-6"
                  value={sortBy}
                  onChange={handleFilterSelect}
                >
                  <option value="" className="text-sky-600">
                    Summary stats
                  </option>
                  {uniqueCategories.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="text-gray-600 py-2"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Top Summary Stats   starts here */}
            <div className="w-full  lg:px-12">
              <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8">
                <h1 className="text-center text-green-700 text-lg font-bold pb-2">
                  Top Summary Stats
                </h1>
                <div className=" grid grid-cols-1 sm:grid-cols-6 gap-4 ">
                  {/* Followers Stats  starts here*/}
                  <div className="sm:col-span-2 h-64">
                    <FollowerStats />
                  </div>
                  {/* Followers Stats  ends here*/}

                  {/* Sentiments Score Stats  starts here*/}
                  <div className="sm:col-span-2 h-64">
                    <SentimentsScoreStats />
                  </div>
                  {/* Sentiments Score Stats  ends here*/}

                  {/* Social media sentimental timeline Stats  starts here*/}
                  <div className="sm:col-span-2 h-64">
                    <SocialMediaSentimentalTimeline />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                  <div className="w-8 bg-white mt-6 ring-1 ring-black">
                    <ul className=" py-2">
                        {socialiconsentiment.map(item=>
                        <>
                        <div className="w-full hover:bg-green-500 flex flex-col items-center cursor-pointer rounded-md"><li className="w-6 h-6 my-2 ">{item.icon}</li></div>
                        </>)}
                    </ul>
                  </div>
                  <div className="flex-1">
                    {" "}
                    <div className="py-6 grid grid-cols-1 sm:grid-cols-6 gap-4 ">
                      <div className="sm:col-span-2 sm:col-start-1 h-64">
                        <SentimentcategoryTimeline />
                      </div>
                      <div className="sm:col-span-2 sm:col-start h-64">
                        <SocialMediaSentimentalTimeline />
                      </div>

                      <div className="sm:col-span-2 sm:col-start h-64">
                        <ScatterLinePlot />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            {/* Top Summary Stats   Ends here */}
          </div>
        </div>
      </main>
    </section>
  );
};

export default AdminDash;