import React from 'react';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";
import WigiLogo from "../src/images/wigi.jpeg";
import Image1 from '../src/images/academy_2_dribbble.png';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
            image={WigiLogo}
            channel="Wigi Academy"
            verified
            subs="800k"
            noOfVideos={200}
            description="On-Demand Platform for Learning"
            />
            <hr /> 
            <VideoRow 
            views="1.4M"
            subs="567k"
            description="Do you want to become a React js expert? Then check out this course"
            timestamp="59 seconds ago"
            channel="Wigi Academy"
            title="REACT - Cory Henry e Isaiah Sharkey - O QUE ELE FEZ NESSE VÍDEO??"
            image="https://i.ytimg.com/vi/siIum6EXJkc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArDxnkJhgPkT9C7NLaCeqHocZQng"
            />
            <VideoRow 
            views="1.4M"
            subs="567k"
            description="Do you want to become a React js expert? Then check out this course"
            timestamp="59 seconds ago"
            channel="Wigi Academy"
            title="🚀Learn React fundamentals by building world class app"
            image={Image1}
            />
            <VideoRow 
            views="1.4M"
            subs="567k"
            description="Do you want to become a React js expert? Then check out this course"
            timestamp="59 seconds ago"
            channel="Wigi Academy"
            title="🚀Learn React fundamentals by building world class app"
            image="https://i.ytimg.com/an_webp/j3cYLcE9ICg/mqdefault_6s.webp?du=3000&sqp=CMizlIcG&rs=AOn4CLD4GkhdbAYqkKcXwTIxVSzHZw39-Q"
            />
            <VideoRow 
            views="1.4M"
            subs="567k"
            description="Do you want to become a React js expert? Then check out this course"
            timestamp="59 seconds ago"
            channel="Wigi Academy"
            title="🚀Learn React fundamentals by building world class app"
            image={Image1}
            />
            <VideoRow 
            views="1.4M"
            subs="567k"
            description="Do you want to become a React js expert? Then check out this course"
            timestamp="59 seconds ago"
            channel="Wigi Academy"
            title="🚀Learn React fundamentals by building world class app"
            image={Image1}
            />
            
        </div>
    )
}

export default SearchPage
