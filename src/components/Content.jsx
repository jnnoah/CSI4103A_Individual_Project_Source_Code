import React, {useState, useEffect} from 'react';
import '../App';
import axios from 'axios';

const Content = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: "GET", 
            url: "https://www.scorebat.com/video-api/v3/feed/?token=NTM1MDRfMTY3NDQyMDM0Nl84YzZlZDI2MDAyMDVmYTM0NTc5ZGI3ZTA0MmM0YWQ1YTdiNDMxYWU5"
        }).then(res => {
            console.log(res.data);
            setData(res.data.response);
        }).catch(err => console.log(err))
    }, []);


    return <div className="content">
        {data.map((item, index) => {
            return (
                <div className="itemDiv" key={index}onClick={() => window.open(item.matchviewUrl)}>
                    <div className="itemHeading">
                        <h4>{item.title}</h4>
                    </div>
                    <div className="itemImage">
                        <img src={item.thumbnail} alt="#" />
                    </div>
                </div>
            )
        })}
    </div>;
};

export default Content;