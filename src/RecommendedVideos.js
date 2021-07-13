import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

// Channel Images
import Image from '../src/images/academy_2_dribbble.png'
import Image2 from '../src/images/airfocus-K_VeavYEfdA-unsplash.jpg'
import Image3 from '../src/images/le-wagon-iZIlQj9D0O8-unsplash.jpg'
import Image4 from '../src/images/beci-harmony-6msKmUPZZtU-unsplash.jpg'
import Image5 from '../src/images/li-hao-b25tsR8dBh0-unsplash.jpg'
import Image6 from '../src/images/jeremy-mcgilvrey-9igbMCBn1cQ-unsplash.jpg'

// Avatar Images
import Avatar1 from '../src/images/Avatar/Avatar1.png'
import Avatar2 from '../src/images/Avatar/introduction-visual.png'
import Avatar3 from '../src/images/Avatar/about-history.jpg'
import Avatar4 from '../src/images/Avatar/about-philosophy.jpg'
import Avatar5 from '../src/images/Avatar/contact-visual.png'
import Avatar6 from '../src/images/Avatar/work-victory.jpg'



const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="How to get the most from Wigi academy | 2019/2020"
                views="10M Views"
                timestamp="3 days ago"
                channelImage="https://media-exp1.licdn.com/dms/image/C5603AQHThU90d0hHlw/profile-displayphoto-shrink_200_200/0/1607564745353?e=1625097600&v=beta&t=Iw7Dn88KToS6OebQFasIMvDPoN28FxFtpoMkkh6hITs"
                channel="Ebiwari Meshach"
                image="https://i.ytimg.com/vi/Z3irbQWczs8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPMpaucztUenCzjV6nn0Guauwu1Q"
                />
                <VideoCard 
                    title="Wizkid Like You've Never Seen Him Before | A Day In The Live"
                    views="4M Views"
                    timestamp="4 weeks ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLT3N424g7p5_clqgGDIEEYeczBEQAnAN0GX7Zrl=s88-c-k-c0x00ffffff-no-rj"
                    channel="Starboy Tv"
                    image="https://i.ytimg.com/vi/zXmX3QHa4ws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_XAfqf-0D_l8tcSDpySuNfUcwEg"
                />
                <VideoCard 
                  title="Because he live Yohkam key"
                  views="2.5M Views"
                  timestamp="1 year ago"
                  channelImage="https://yt3.ggpht.com/ytc/AKedOLSP1Y9CWkaChb8BxdP7IXxPdvCRUNF2JJZepQxtFQ=s68-c-k-c0x00ffffff-no-rj"
                  channel="Yokham keys"
                  image="https://i.ytimg.com/vi/QFwO7-Brh88/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgU1ScQWOZANNMQumTdR--yX7anw"
                />
                <VideoCard 
                 title="How to get the most from Wigi academy | 2019/2020"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar3}
                 channel="Matchless"
                 image={Image6}
                
                />
                <VideoCard 
                 title="How to get the most from Wigi academy | 2019/2020"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar4}
                 channel="Volumn concert"
                 image={Image4}
                />
                <VideoCard 
                 title="How to get the most from Wigi academy | 2019/2020"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar5}
                 channel="BettyBlam"
                 image={Image5}
                />
                <VideoCard 
                 title="How to get the most from Wigi academy | 2019/2020"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar6}
                 channel="Ebiwari Meshach"
                 image={Image6}
                />
                <VideoCard 
                 title="How to get the most from Wigi academy | 2019/2020"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar2}
                 channel="Funky way"
                 image={Image3}
                />
                <VideoCard 
                title="How to get the most from Wigi academy | 2019/2020"
                views="10M Views"
                timestamp="3 days ago"
                channelImage="https://media-exp1.licdn.com/dms/image/C5603AQHThU90d0hHlw/profile-displayphoto-shrink_200_200/0/1607564745353?e=1625097600&v=beta&t=Iw7Dn88KToS6OebQFasIMvDPoN28FxFtpoMkkh6hITs"
                channel="Ebiwari Meshach"
                image={Image}
                />
                <VideoCard 
                    title="How to get the most from Wigi academy | 2019/2020"
                    views="10M Views"
                    timestamp="3 days ago"
                    channelImage={Avatar1}
                    channel="Ebiwari Meshach"
                    image={Image2}
                />
                <VideoCard 
                  title="React JS Interview - MNC JOB Profile - What you should know about React JS 🔥🔥"
                  views="10M Views"
                  timestamp="3 days ago"
                  channelImage={Avatar2}
                  channel="Gucci"
                  image={Image3}
                />
                <VideoCard 
                 title="How to get the most from Wigi academy | 2019/2020"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar3}
                 channel="Ford Tv"
                 image={Image3}
                
                />
                <VideoCard 
                 title="5 Tips to Grow your Income as a Graphic Designer!"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar4}
                 channel="Amazon Music"
                 image={Image4}
                />
                <VideoCard 
                 title="I Was Pressured To Marry Chioma - Davido on Ndani TV"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage="https://yt3.ggpht.com/ytc/AKedOLRFLi6niNO-u5rCRaApik8ymVtKshNDC7qmHs727w=s68-c-k-c0x00ffffff-no-rj"
                 channel="OGK Viral"
                 image="https://i.ytimg.com/vi/XlwMptETe_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBigkb5EaoPKRzHbSdQ82c3xYzExw"
                />
                <VideoCard 
                 title="How to get the most from Wigi academy | 2019/2020"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar6}
                 channel="Naija Loaded"
                 image={Image6}
                />
                <VideoCard 
                 title="How To Think And Problem Solve In Coding"
                 views="10M Views"
                 timestamp="3 days ago"
                 channelImage={Avatar2}
                 channel="Milan"
                 image={Image3}
                />
            </div>

        </div>
    )
}

export default RecommendedVideos
