import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

import gallery from '../images/newWorker/gallery.jpg'


export default function XodimQoshish() {

    const navigate = useNavigate();

    const [img, setImg] = useState('')

    const date = new Date();
    const month = date.getMonth()
    const realMonth = 1 + month
    const day = date.getDate()
    const year = date.getFullYear()

    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [salary, setSalary] = useState('')
    const [birthday, setBisthday] = useState('')
    const [position, setPosition] = useState('')
    const [address, setAddress] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [group, setGroup] = useState('')
    const [team, setTeam] = useState('')


    function saveInfo() {
        axios.post('http://localhost:9000/xodimlar', {
            img,
            surname,
            name,
            gender,
            salary,
            birthday,
            position,
            address,
            phone1,
            phone2,
            group,
            team
        })
            .then(res => {
                console.log(res.data);
                alert('Your info is saved')
                navigate('/')
            })
    }

    return (
        <div className="container">
            <button className="btn btn-primary mb-3" onClick={() => navigate('/')}><BsArrowLeft /> Orqaga</button>
            <div className=" bg-white p-3" style={{ borderRadius: '10px' }}>
                <div className="row " >
                    <div className="col-3">
                        <div className="input-group mb-3 addNewWorkerImg" >
                            <label className="input-group-text" for="inputGroupFile01">
                                <img src={gallery} className='img-fluid' alt="" />
                            </label>
                            <input style={{ opacity: '0' }} onChange={(e) => setImg(e.target.files)} type="file" className="form-control" id="inputGroupFile01" />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 mt-3 ">
                                <h6>Familiya</h6>
                                <input placeholder="Familiya kiriting" onChange={(e) => setSurname(e.target.value)} type="text" className="form-control mt-3" required />
                            </div>
                            <div className="col-6 mt-4">
                                <div className="row">
                                    <h6>Jinsi</h6>
                                    <div className="col-6 mt-2 form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label onClick={() => setGender('Erkak')} className="form-check-label" for="flexRadioDefault1" required>
                                            Erkak
                                        </label>
                                    </div>
                                    <div className="col-6 mt-2 form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label onClick={() => setGender('Ayol')} className="form-check-label" for="flexRadioDefault2" required>
                                            Ayol
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Ismi</h6>
                                <input placeholder="Isimni kiriting" onChange={(e) => setName(e.target.value)} type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Oyligi</h6>
                                <input placeholder="Oyligi" onChange={(e) => setSalary(e.target.value)} type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Tug'ilgan sana</h6>
                                <input placeholder={day + '/' + realMonth + '/' + year} type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Lavozimi</h6>
                                <input placeholder="Lavozimi" onChange={(e) => setPosition(e.target.value)} type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Manzili</h6>
                                <input placeholder="Manzili" onChange={(e) => setAddress(e.target.value)} type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Tel raqam</h6>
                                <input placeholder="+998 90-123-45-67" onChange={(e) => setPhone1(e.target.value)} type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Guruhni</h6>
                                <select className="form-select form-select-sm mt-3 p-2" onChange={(e) => setGroup(e.target.value)} aria-label=".form-select-sm example">
                                    <option selected>Guruhni tanlang</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Tel raqam 2</h6>
                                <input placeholder="+998 90-123-45-67" onChange={(e) => setPhone2(e.target.value)} type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-6 mt-3 ">
                                <h6>Smena</h6>
                                <select className="form-select form-select-sm mt-3 p-2" onChange={(e) => setTeam(e.target.value)} aria-label=".form-select-sm example">
                                    <option selected>Smenani tanlang</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className="col-6 mt-5">
                                <div style={{ textAlign: 'end' }}>
                                    <button className="qoshishBtn mt-3" onClick={saveInfo}>+ Qoshish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}