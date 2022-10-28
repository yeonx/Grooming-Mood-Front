import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React from "react";
import dateFormat from "dateformat";
import convertImage from "../utils/function";


const dummyList = [
    {
        id: 1,
        feeling: "ANGRY",
        content: "하이",
        date: "2022-10-17 01:00:00.000000",
    },
    {
        id: 2,
        feeling: "ANGRY",
        content: "하이",
        date: "2022-10-17 01:00:00.000000",
    },
    {
        id: 3,
        feeling: "ANGRY",
        content: "하이",
        date: "2022-10-17 01:00:00.000000",
    },
];


const
    FeedList = ({ dataList }) => {
        return (
            <div>
                <div>
                    {dataList.map((it) => {
                        return (

                            <div className="data-container"
                                 key = {it.id}>

                                <div className="data-image">
                                    {
                                        (convertImage(it.feeling))
                                    }
                                </div>


                                <div className="data-content">
                                    <span>{ it.content }</span>
                                </div>
                                <div className="data-date">
                                    <span>{ dateFormat(it.date, "yyyy-mm-dd HH:mm") }</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

function NormalHome(props) {
    return (
        <div className="normal-home">

            <div className="normal-home-header">
                <Link to="/" className="normal-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="normal-content">
                <div className="normal-container">
                    <div className="normal-diary-container">
                        <h2 className="normal-diary-title">
                            나의 감정일기
                        </h2>
                    </div>

                    <FeedList dataList={dummyList}  />

                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

}

export default withRouter(NormalHome);