import React from 'react'
import Channels from './Channels'
import ChannelVideos from './ChannelVideos'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import './SearchPage.css'

function SearchPage() {
    return(
        <div className="searchPage" >
          <div className="search_filter" >
            <TuneOutlinedIcon />
            <h2>FILTERS</h2>
          </div>
          <hr />

          <div className="channelCard">
           <Channels
            channelImage="https://i.imgur.com/zmxkG0A.jpg" 
            channelName="Amazon Prime Video India"
            verified
            subcribers="5.7M subscribers" 
            totalVideos="1,885 videos" 
            aboutChannel="Unlimited ad-free streaming of Amazon Originals, 
                          premium movies and TV shows from India and around the world."

           />
            <div className="sub_div" >
              <button className="sub_btn" >SUBSCRIBED</button>
              <NotificationsOutlinedIcon className="bell_icon" />
            </div>
              
           </div>
          <hr />

          <div className="channel_videos" >
            <h4>Latest from Amazon Prime Video India</h4>

            <ChannelVideos
               title="Lie Detector | The Family Man Season 2 | Sharib Hashmi, Priyamani | Amazon Prime Video"
               views="171K Views"
               timestamp="2 hours ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/YqGSuTq.jpg"
               discription="Welcome to second part of the Lie Detector Test - Lie Detector 2.0! Who gets caught this 
                            time by the machine? Find out in the ..."
               quality1="New"
               quality2="CC"
           />

            <ChannelVideos
               title="Ek Mini Game - How Big Is It? Ft. Santosh Shoban, Kavya Thapar | Amazon Prime Video"
               views="171K Views"
               timestamp="2 hours ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/YghA9E4.jpg"
               discription="Welcome to second part of the Lie Detector Test - Lie Detector 2.0! Who gets caught this 
                            time by the machine? Find out in the ..."
               quality1="New"
               quality2="4K"
           />
           <h4 className="more_latestVideos" >+8 MORE</h4>
          <hr className="hr_style" />

          <ChannelVideos
               title="Latest Tamil Entertainment This June On Amazon Prime Video"
               views="543K Views"
               timestamp="6 hours ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/v3OL5Iv.jpg"
               discription="Presenting latest blockbuster movies for you to enjoy this June on 
                            Amazon Prime Video. Soorarai Pottru (Tamil) Director: Sudha ..."
               quality1="New"
               quality2="4K"
           />

            <ChannelVideos
               title="Sherni - Time For A Battle! | Vidya Balan | Amazon Prime Video"
               views="22K Views"
               timestamp="5 hours ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/romMLkK.jpg"
               discription="This #Sherni is almost here to pick her battles! Meet #SherniOnPrime, 
                            June 18. An Amazon Original Movie Gulshan Kumar and ..."
               quality1="New"
               quality2="CC"
           />
           
           <ChannelVideos
               title="Uninterrupted Srikant | The Family Man | Manoj Bajpayee | Amazon Prime Video"
               views="3M Views"
               timestamp="2 weeks ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/SkLbKNG.jpg"
               discription="Presenting 4 minutes of non stop Srikant Tiwari, with his jokes, shayari 
                            and action scenes. Get ready for the new season of The ..."
               quality1="4K"
               quality2="CC"
           />

          <h4 className="more_latestVideos" >+4 MORE</h4>
          <hr className="hr_style" />

          <h4>People also watched</h4>

          <ChannelVideos
               title="6 Best Life Advice On Amazon Prime Video"
               views="185K Views"
               timestamp="1 month ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/lkbJiiy.jpg"
               discription="Here we are with 6 Best Life Changing Advice from your favourite movies 
                            by all your favourite actors on Amazon Prime Video!"
               quality1="CC"
           />

            <ChannelVideos
               title="Gajab Bejjati Hai Yaar | Panchayat | Jeetu Bhaiya, Raghuvir Yadav | Amazon Prime Video"
               views="3.3M Views"
               timestamp="3 months ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/NlpCz1S.jpg"
               discription="When groom and his friends arrive, they get offended by the treatment given by 
                            Jeetu Bhaiya, but Jeetu Bhaiya is already pissed ..."
           />

           <ChannelVideos
               title="DOM - Official Trailer (English) | Amazon Prime Video"
               views="5.4M Views"
               timestamp="2 weeks ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/WktWsBG.jpg"
               discription="Dom tells the story of Pedro, a handsome boy from Rio de Janeiro's middle 
                            class who is introduced to cocaine in his teen years, ..."
               quality1="4K"
               quality2="CC"
           />

            <ChannelVideos
               title="Mirzapur 2 Deleted Scene - Munna Bhaiya Vs. Kaleen Bhaiya | Amazon Prime Video"
               views="548K Views"
               timestamp="1 month ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/dgbgSaA.jpg"
               discription="Watch the cold war between father and son, Munna Bhaiya vs. Kaleen Bhaiya 
                            in this exclusive deleted scene from Mirzapur 2 only ..."
               quality1="CC"
           />

           <ChannelVideos
               title="Master - Official Trailer |Thalapathy Vijay, Vijay Sethupathi |Lokesh Kanagaraj |Amazon Prime Video"
               views="6.4M Views"
               timestamp="4 months ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/beQOUdR.jpg"
               discription="Presenting Master Official Trailer 2021, Written & Directed by Lokesh Kanagaraj Starring 
                            Thalapathy Vijay, Vijay Sethupathi, ..."
               quality1="CC"
           />

            <ChannelVideos
               title="6 Best IMDB Rated Movies On Amazon Prime Video"
               views="1.1M Views"
               timestamp="1 month ago"
               channelImage="https://i.imgur.com/zmxkG0A.jpg"
               channel="Amazon Prime Video India"
               verified
               image="https://i.imgur.com/jqdWLkU.jpg"
               discription="Discover the best IMDB rated movies on Amazon Prime Video popular amongst cinephiles. The Dark 
                            Knight Director: Christopher ..."
               quality1="CC"
           />

          </div>
          <hr />

        </div>
    )
}

export default SearchPage;