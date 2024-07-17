import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import './View.css';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const navigate = useNavigate();

    const [record, setRecord] = useState([]);
    const [filterrecord, setFilterRecord] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        let data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
        setRecord(data);
        setFilterRecord(data);
    }, []);

    // Delete 
    const handleDelete = (id) => {
        const deleteRecords = record.filter(item => item.id !== id);
        localStorage.setItem("users", JSON.stringify(deleteRecords));
        setRecord(deleteRecords);
        setFilterRecord(deleteRecords);
        toast.error("User deleted successfully!");
    };


    // status, search, sort
    useEffect(() => {
        let filtered = [...record];

        if (search) {
            filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (sort) {
            if (sort === 'asc') {
                filtered.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
            } else if (sort === 'dsc') {
                filtered.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
            }
        }

        setFilterRecord(filtered);
    }, [search, sort, record]);

    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className='box mb-3'>

                        <div className='box-1 col-lg-3'>
                            <form>
                                <input type="text" onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='search here' />
                            </form>
                        </div>

                        <div className='col-lg-3'>
                            <select onChange={(e) => setSort(e.target.value)} className='form-control' value={sort}>
                                <option value="">---select sorting---</option>
                                <option value="asc">A-Z</option>
                                <option value="dsc">Z-A</option>
                            </select>
                        </div>
                    </div>

                    <table className='shadow'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Password</th>
                                <th>City</th>
                                <th>Salary</th>
                                <th>Degignation</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filterrecord.map((val) => {
                                const { id, name, email, password, city, salary, deignation } = val;
                                return (
                                    <tr key={id}>

                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{city}</td>
                                        <td>{salary}</td>
                                        <td>{deignation}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => navigate('/edit', { state: val })}>Edit</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}

export default View;
