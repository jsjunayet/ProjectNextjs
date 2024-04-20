import { BsCurrencyEuro } from "react-icons/bs";
import { FaShareAltSquare } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdWidthFull } from "react-icons/md";
import { FaBed } from "react-icons/fa";

const Data = () => {
    const datas = [

        {
            "roadnumber": "RE0015",
            "img": "./img1.jpg",
            "title": "Villa Nueva Andalucia, Marbella",
            "taka": "35,000",
            "kilometer1": 854,
            "kilometer2": 1.523,
            "number": 8,
            "shareicons": "Share",
            "R": "R",
            "E": "E"
        },
        {
            "roadnumber": "RE2305",
            "img": "./img2.jpg",
            "title": "Apartment Marbella Golden Mile, Marbella",
            "taka": "2900",
            "kilometer1": 140,
            "number": 3,
        },
        {
            "roadnumber": "RE2291",
            "img": "./img3.jpg",
            "title": "Ground Floor Apartment Nueva Andalucia,..",
            "taka": "4500",
            "kilometer1": 237,
            "kilometer2": 1.523,
            "number": 3,
            "i": "i",
        },
        {
            "roadnumber": "RE2011A",
            "img": "./img4.jpg",
            "title": "Ground Flor Apartment Cancelada, Espona",
            "taka": "2,600",
            "kilometer1": 70,
            "kilometer2": 140,
            "number": 2,
            "shareicons": "Share",
        },
        {
            "roadnumber": "RE2345",
            "img": "./img5.jpg",
            "title": "Villa mijas Costa",
            "taka": "7,500",
            "kilometer1": 350,
            "kilometer2": "1,000",
            "number": 4,
            "shareicons": "Share",
            "E": "E"
        },
        {
            "roadnumber": "RE2303A",
            "img": "./img6.jpg",
            "title": "Apartment sernorio de Aloha, Marbella",
            "taka": "2,500",
            "kilometer1": 135,
            "kilometer2": 135,
            "number": 2,
            "shareicons": "Share",
        },
        {
            "roadnumber": "re2303",
            "img": "./img7.jpg",
            "title": "Apartment  Marbella East, Marbella",
            "taka": "2,300",
            "kilometer1": 185,
            "kilometer2": 1.523,
            "number": 3,
            "shareicons": "Share",
            "E": "E"
        },
        {
            "roadnumber": "RE111 ",
            "img": "./img8.jpg",
            "title": "Duplex penthouse Estepona East Estepona",
            "taka": "2,300",
            "kilometer1": 117,
            "number": 2,
            "shareicons": "Share",
        },
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {datas.map((data, index) => (
                <div key={index} className=" bg-gray-200  shadow-md">
                    <div className=" relative">
                        <img src={data.img} alt={data.title} className="w-full mb-2" />
                        <div className="px-2">
                            <h2 className=" text-sm">{data.title}</h2>
                            <button className="flex gap-1 items-center bg-gray-400 px-2  absolute right-0 top-0 ">
                                <p className="text-gray-200 text-md">{data.roadnumber}</p>
                                <input type="checkbox" className=" w-5 h-4" name="" id="" />
                            </button>
                            <FaRegStar className=" text-orange-200 text-2xl absolute top-1 left-1" />
                            <div className="flex justify-between items-center">
                                <p className="text-gray-800  flex items-center"> {data.taka} <BsCurrencyEuro></BsCurrencyEuro>/ Month </p>
                                <div>
                                    <div className="flex gap-1 items-center">

                                        {data.R && <p className=" bg-red-500  px-2 text-white py-[1px] rounded-sm">{data.R}</p>}
                                        {data.E && <p className="bg-gray-500 px-2 text-white py-[1px] rounded-sm">{data.E}</p>}
                                        {data.i && <p className="bg-green-600 px-[6px] text-white py-[2px] rounded-sm"><GiEarthAfricaEurope className="text-xl" /></p>}
                                        {data.shareicons && (
                                            <p className="text-blue-500 hover:underline cursor-pointer">
                                                <FaShareAltSquare className=" text-green-600 text-3xl" />
                                            </p>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className="flex gap-2">
                                {
                                    data.number && <p className="text-gray-800 flex items-center gap-[2px]"><FaBed className="text-xl" /> {data.number}</p>
                                }
                                {
                                    data.kilometer1 && <p className="text-gray-800 flex items-center gap-[2px]"><MdWidthFull className="text-xl" /> {data.kilometer1}m<sup>2</sup></p>
                                }
                                {data.kilometer2 && (<p className="text-gray-800 flex items-center gap-[2px]"><MdWidthFull className="text-xl" /> {data.kilometer2}m<sup>2</sup></p>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Data;