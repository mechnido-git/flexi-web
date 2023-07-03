import React from "react";
import SecondaryBtn from "../../../components/secondaryBtn/SecondaryBtn";
import './service.css'

const RenderList = ({item}) => {
    if(item.side === 'l-r') return <>
        <div className="details">
            <span>{item.name}</span>
            <p>{item.details}</p>
            <SecondaryBtn content='Read More' theme='white' />
        </div>
        <img src={item.img} alt="" />
        </>
        return <>
        <img src={item.img} alt="" />
        <div className="details">
            <span>{item.name}</span>
            <p>{item.details}</p>
            <SecondaryBtn content='Read More' theme='white' />
        </div>
        </>
}

function Service({ data }) {

    return <>{data.map((item, i)=><div className="service-list" key={i}>
        <RenderList item={item} />
    </div>)}</>
}

export default Service;
