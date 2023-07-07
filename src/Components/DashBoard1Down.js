import React from "react"
import Download from '../assets/Download.svg'
import userIcon from '../assets/user-icon.svg'
import { Link } from "react-router-dom"
import MoreInfo from "./MoreInfo"

// import React, { useEffect, useState } from 'react'


const data = [
    { product: 'Ogbeni Malani', date: '02 / 04 / 23', status: 'Approved', creditScore: '810', amount: 'N 35,000.00' },
    { product: 'Muktar Bello', date: '02 / 04 / 23', status: 'Approved', creditScore: '205', amount: 'N 102,000.00' },
    { product: 'Rukayat Stutern', date: '01 / 04 / 23', status: 'Rejected', creditScore: '332', amount: 'N 40,000.00' },
    { product: 'oloyuyomi Stutern', date: '01 / 04 / 23', status: 'Rejected', creditScore: '790', amount: 'N 50,000.00' },
    { product: 'Ekere Stutern', date: '01 / 04 / 23', status: 'Pending', creditScore: '650', amount: 'N 50,000.00' }

]

const DashBoard1_Down = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('https://....');
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    return (
        <div className="dashBoardTable">
            <table>
                <thead>
                    <div className="all">
                        <tr>All Applications <span>
                            <img src={Download} alt='Download' />
                        </span></tr>
                        <tr>Sorted by Date</tr>
                    </div>
                    <tr className="bodyHeader">
                        <th>Product</th>
                        <th>Date <span>
                            <img src={Download} alt='Download' />
                        </span></th>
                        <th>Status <span>
                            <img src={Download} alt='Download' />
                        </span></th>
                        <th>Credit Score <span>
                            <img src={Download} alt='Download' />
                        </span></th>
                        <th>Amount <span>
                            <img src={Download} alt='Download' />
                        </span></th>
                    </tr>
                </thead>
                <tbody>

                    {/* {data.map((item) */}
                    {data.map((val, key) => {
                        return (
                            <>
                                <tr key={key}
                                // key= {item.id}   > 
                                >
                                    {/* <td>{item.product}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                                <td>{item.creditScore}</td>
                                <td>{item.amount}</td> */}

                                    <td> <div className="userIcon">
                                        <img src={userIcon} alt='user-icon' />
                                    </div>
                                        <div className="user">
                                            {val.product} </div>
                                        <br /><Link to="/MoreInfo"> More info </Link>
                                    </td>
                                    <td>{val.date}</td>
                                    <td>{val.status}</td>
                                    <td>{val.creditScore}</td>
                                    <td>{val.amount} <span>
                                        <img src={Download} alt='Download' />
                                    </span></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
                <th className="footer" ><button>  Prev</button> <button>1</button><button>2</button> <button>_</button>
                    <button>5</button><button>6</button><button>Next</button>
                </th>
            </table>
        </div>
    );
}

export default DashBoard1_Down