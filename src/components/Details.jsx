import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Chart from "./Chart";
import { BsArrowLeft } from "react-icons/bs";




export default function Details() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [detail, setDetail] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:9000/xodimlar/${id}`)
            .then(res => {
                setDetail(res.data)
            })
            .catch(err => console.log(err))
    }, [id])


    return (
        <div className="container mb-5 mt-5">
            <button className="btn btn-primary mb-3" onClick={() => navigate('/')}><BsArrowLeft /> Orqaga</button>
            <div className="row">
                <div className="col-4 bg-white p-2" style={{ marginRight: '2%', borderRadius: '10px' }}>
                    <div className="detailsSallImg">
                        <img src={detail.img} alt="" />
                        <div className="detailsSallImgText">
                            <h6>{detail.name}    {detail.surname}</h6>
                            <p>{detail.position}</p>
                        </div>
                    </div>
                    <div className="infos">
                        <span>Tur:</span>
                        <p>Doimiy</p>
                    </div>
                    <div className="infos">
                        <span>Manzili:</span>
                        <p>{detail.address}</p>
                    </div>
                    <div className="infos">
                        <span>Tel raqam:</span>
                        <p>{detail.phone1}</p>
                    </div>
                    <div className="infos">
                        <span>Tel raqam 2:</span>
                        <p>{detail.phone2}</p>
                    </div>


                    <div className="chart">
                        <Chart />
                    </div>
                </div>
                <div className="col-7 bg-white p-2" style={{ borderRadius: '10px' }}>
                    <img src={detail.img} className='img-fluid' alt="" />
                    <h6>Ismi : {detail.name}</h6>
                    <h6>Familiyasi : {detail.surname}</h6>
                    <h6>Tug'ilgan sanasi : {detail.birthday}</h6>
                    <h6>Manzili : {detail.address}</h6>
                    <h6>Guruh : {detail.group}</h6>
                    <h6>Smena : {detail.team}</h6>
                    <h6>Oylik : {detail.salary}</h6>
                    <h6>Lavozimi : {detail.position}</h6>
                    <h6>Telefon raqami : {detail.phone1}</h6>
                    <h6>Telefon raqami 2 : {detail.phone2}</h6>
                </div>
            </div>
        </div>
    )
}