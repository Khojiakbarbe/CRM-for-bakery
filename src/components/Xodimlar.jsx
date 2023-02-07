import React, { useContext, useState } from "react";
import { dataContext } from "./ContextProvider/DataProvider";
import { useNavigate } from 'react-router-dom'

import { AiOutlineEye } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default function Xodimlar() {


    const navigate = useNavigate();


    const [all] = useContext(dataContext)

    const [filter, setFilter] = useState(all)
    const [forTeam, setForTeam] = useState('')

    function filterBarchasi() {
        setFilter(all)
        setForTeam('barchasi')
    }

    function filterGroup(e) {
        const filter = all.filter(info => info.group.toLowerCase().includes(e.toLowerCase()))
        setFilter(filter)
        setForTeam(e)
    }
    console.log(forTeam);

    function filterTeam(e) {
        if (forTeam === 'barchasi') {
            const team = all.filter(info => info.team.toLowerCase().includes(e))
            setFilter(team)
        } else {
            const team = all.filter(info => info.team.toLowerCase().includes(e) && info.group.toLowerCase().includes(forTeam.toLowerCase()))
            setFilter(team)
        }
    }

    function search(e) {
        const name = all.filter(post => post.name.toLowerCase().includes(e.toLowerCase()) || post.surname.toLowerCase().includes(e.toLowerCase()))
        setFilter(name)
    }

    function deleteMethod(id) {
        fetch(`http://localhost:9000/xodimlar/${id}`, {
            method: 'DELETE'
        })
            .then(result => {
                result.json()
                    .then(res => {
                        console.log(res);
                        navigate('/')
                    })
            })
    }

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-3">
                    <h1>Xodimlar</h1>
                </div>
                <div className="col-9 searchDiv" >
                    <input type="search" className="form-control w-50" placeholder="Qidiruv" onChange={(e) => search(e.target.value)} />
                </div>
            </div>
            <div className="p-5 bg-white" style={{ borderRadius: '10px' }}>
                <div className="row  p-3">
                    <div className="col-1 mb-2 text-left" >
                        <strong>No-</strong>
                    </div>
                    <div className="col-2 mb- text-left">
                        <strong>Familiya Ismi</strong>
                    </div>
                    <div className="col-2 mb- text-center">
                        <strong>Lavozimi</strong>
                    </div>
                    <div className="col-2 mb- text-center" style={{ marginTop: '-1%' }}>
                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                color="white">
                                <strong>Guruhlar</strong>
                            </DropdownToggle>
                            <DropdownMenu dark>
                                <DropdownItem onClick={(e) => filterBarchasi(e.target.value)} value='barchasi'>
                                    Barchasi
                                </DropdownItem>
                                <DropdownItem onClick={(e) => filterGroup(e.target.value)} value='A'>
                                    A
                                </DropdownItem>
                                <DropdownItem onClick={(e) => filterGroup(e.target.value)} value='B'>
                                    B
                                </DropdownItem>
                                <DropdownItem onClick={(e) => filterGroup(e.target.value)} value='C'>
                                    C
                                </DropdownItem>
                                <DropdownItem onClick={(e) => filterGroup(e.target.value)} value='D'>
                                    D
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div className="col-1 mb-2" style={{ marginTop: '-1%' }}>
                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                color="white">
                                <strong>Smena</strong>
                            </DropdownToggle>
                            <DropdownMenu dark>
                                <DropdownItem onClick={(e) => filterBarchasi(e.target.value)} value='barchasi'>
                                    Barchasi
                                </DropdownItem>
                                <DropdownItem onClick={(e) => filterTeam(e.target.value)} value='1'>
                                    1
                                </DropdownItem>
                                <DropdownItem onClick={(e) => filterTeam(e.target.value)} value='2'>
                                    2
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div className="col-2 mb- text-center">
                        <strong>Telefon</strong>
                    </div>
                    <div className="col-2 mb- text-center">
                        <strong>Amal</strong>
                    </div>
                </div>
                {
                    filter.map(post => {
                        return (
                            <div className="row  xodimlarRow" >
                                <div className="col-1 mb-2 text-left" >
                                    <p><strong>{post.id}</strong></p>
                                </div>
                                <div className="col-2 mb- text-left nameSurname">
                                    <span style={{ marginLeft: '-5%', marginRight: '5%' }}>{post.name}</span>
                                    <span>{post.surname}</span>
                                </div>
                                <div className="col-2 mb- text-center">
                                    <p>{post.position}</p>
                                </div>
                                <div className="col-2 mb- text-center">
                                    <p>{post.group}-guruh</p>
                                </div>
                                <div className="col-1 mb-2">
                                    <p>{post.team}-smena</p>
                                </div>
                                <div className="col-2 mb- text-center">
                                    <p>{post.phone1}</p>
                                </div>
                                <div className="col-2 mb- text-center">
                                    <p className="">
                                        <strong onClick={() => navigate(`/xodim/${post.id}`)} className='seeDetails'><AiOutlineEye /></strong>
                                        <span style={{ marginLeft: '5%', marginRight: '5%' }}><FiEdit /></span>
                                        <span onClick={() => deleteMethod(post.id)}><RiDeleteBin6Line /></span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                <div style={{ textAlign: 'end' }}>
                    <button className="qoshishBtn" onClick={() => navigate('/yangiXodim')}>+ Qoshish</button>
                </div>
            </div>
        </div>
    )
}