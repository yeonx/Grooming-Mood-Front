import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React, {
    useEffect,
    useState,
} from "react";
import { FeedList } from "../Feed/FeedList";
import Pagination from "react-js-pagination";
import "../styles/happy-pagination.css";
import axios from "axios";

function HappyHome(props) {
    const [page, setPage] = useState(1);
    const [feed, set_feed] = useState([]);
    const handlePageChange = (page) => {
        setPage(page);
    };

    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feed-diary/happy-paging?cursor=1&size=3`)
            .then((res) => {
                set_feed(res.data.diaryList);
            })
    }, []);

    return (
        <div className="happy-home">

            <div className="happy-home-header">
                <Link to="/" className="happy-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="happy-content">
                <div className="happy-container">
                    <div className="happy-diary-container">
                        <h2 className="happy-diary-title">
                            HAPPY 감정 일기
                        </h2>
                    </div>

                    <FeedList dataList={feed}  />

                </div>
                <SideMenu></SideMenu>
            </div>
            <div className="happy-pagination">
                <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                />
            </div>
        </div>

    );

}

export default withRouter(HappyHome);