import React from 'react';
import VideoCard from './VideoCard';
import Category from './Category';
import './RecommendedVideos.css';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function RecommendedVideos() {
    return (
       <div className="recommendedVideos">
         <Category />
         
         <div className="videocards">
           <VideoCard
             title="ICC World Test Championship Final 2021: Time..."
             views="18K Views"
             timestamp="28 minutes ago"
             channelImage="https://i.imgur.com/I0e8KuX.jpg"
             channel="Star Sports"
             verified 
             image="https://i.imgur.com/JxweNoN.jpg"

           />

           <VideoCard
             title="Build LinkedIn with React JS (Firebase + Styled..."
             views="2.3M Views"
             timestamp="1 week ago"
             channelImage="https://i.imgur.com/E5dkOnS.jpg"
             channel="Clever Programmer"
             verified
             image="https://i.imgur.com/FnX6Gje.jpg"

           /> 
           
           <VideoCard
             title="Kartavya NGO : Documentary | Their Future will..."
             views="3.2K Views"
             timestamp="4 years ago"
             channelImage="https://i.imgur.com/hLu821I.jpg"
             channel="Kartavya Dhanbad Chapter"
             image="https://i.imgur.com/g2WQ4dI.jpg"

           />
          <a href="https://youtu.be/AzOvsmpQVKM" >
           <VideoCard
             title="Jubin Nautiyal : Kabira (कबीर दोहे) | Raaj Aashoo |..."
             views="13.3M Views"
             timestamp="4 days ago"
             channelImage="https://i.imgur.com/XpqJUzv.jpg"
             channel="T-Series"
             verified
             image="https://i.imgur.com/LvJOqxF.jpg"
           /></a>

           <VideoCard
             title="🔴 Shopping Cart Item Quantity INCREMENT In..."
             views="2.2K Views"
             timestamp="11 minutes ago"
             channelImage="https://i.imgur.com/OpFpW68.jpg"
             channel="Thapa Technical"
             verified
             image="https://i.imgur.com/xUX5FTi.jpg"

           />

          <VideoCard
             title="KOHLI's FIRST Test Century in England! | Edgbaston 2018..."
             views="34.3M Views"
             timestamp="4 months ago"
             channelImage="https://i.imgur.com/U0PPBh4.jpg"
             channel="England & Wales Cricket..."
             verified
             image="https://i.imgur.com/jxTgwdy.jpg"

           />

          <VideoCard
             title="Dark Season 3 | Trilogy Trailer | Netflix"
             views="900K Views"
             timestamp="1 year ago"
             channelImage="https://i.imgur.com/FqlR2GU.jpg"
             channel="Netflix"
             verified
             image="https://i.imgur.com/zmAbRM5.jpg"

           />

           <VideoCard
             title="इस खिलाड़ी ने बता दिया आखिर Ravindra Jadeja क्यों हैं..."
             views="14.7K Views"
             timestamp="4 hours ago"
             channelImage="https://i.imgur.com/OJQWUKA.jpg"
             channel="Sports Tak"
             verified
             image="https://i.imgur.com/48PXhtr.jpg"

           />
          </div>

          <hr className="Ad_border size-5" />
          <div className="feature_channel" >
              <Avatar className="ad_avatar" src="https://i.imgur.com/smOUuYF.png"  alt=""  />
              <div className="ad_channelName" >
                <div className="ad_channel" >
                  <h2>COVID-19 Care</h2>
                  <button className="feature" >Featured</button>
                </div>
                  <p>Get the facts about COVID-19 care from experts</p>
              </div>
           </div>
          <div className="videocards">
           <VideoCard
             title="Standards of care for COVID-19 patients"
             views="13.5K Views"
             timestamp="3 months ago"
             channelImage="https://i.imgur.com/RlvtdPA.jpg"
             channel="Osmosis"
             verified
             image="https://i.imgur.com/j8Zc2jD.jpg"

           /> 
           
           <VideoCard
             title="COVID19 Guide to Self Care - HINDI"
             views="20.3K Views"
             timestamp="3 weeks ago"
             channelImage="https://i.imgur.com/66koT0j.jpg"
             channel="Asian American H..."
             verified
             image="https://i.imgur.com/K9YvJar.jpg"

           />

           <VideoCard
             title="Caring for a COVID-19 Patient at Home"
             views="44K Views"
             timestamp="10 months ago"
             channelImage="https://i.imgur.com/nbvuClH.jpg"
             channel="Parkland Memorial Hospital"
             image="https://i.imgur.com/dOQDmGw.jpg"

           />

          <VideoCard
             title="Oxygenation Strategies in the Emergency Department: A..."
             views="443K Views"
             timestamp="6 days ago"
             channelImage="https://i.imgur.com/0ukK3zj.jpg"
             channel="Marrow"
             verified
             image="https://i.imgur.com/ofqWUsA.jpg"

           />
           </div>
           <ExpandMoreOutlinedIcon className="see_more" />
           <hr className="Ad_border size-50" />

           <div className="videocards">
           <VideoCard
             title="10 Great Exercises to Improve Your Eyesight"
             views="19.3M Views"
             timestamp="2 years ago"
             channelImage="https://i.imgur.com/qbVcuga.jpg"
             channel="Bright Side"
             verified
             image="https://i.imgur.com/XHtDnXg.jpg"

           />

           <VideoCard
             title="ZOMBIE | The Living Dead | Round2Hell | R2H"
             views="44M Views"
             timestamp="2 months ago"
             channelImage="https://i.imgur.com/pAmXz7e.jpg"
             channel="Round2hell"
             verified
             image="https://i.imgur.com/VXm93z1.jpg"

           />

          <VideoCard
             title="Why The iPad Doesn't Have A Calculator"
             views="3.1M Views"
             timestamp="1 month ago"
             channelImage="https://i.imgur.com/Yjnpyc4.jpg"
             channel="Apple Explained"
             verified
             image="https://i.imgur.com/lgjkgWd.jpg"

           />

          <VideoCard
             title="Godzilla vs. Kong – Official Trailer"
             views="93M Views"
             timestamp="4 months ago"
             channelImage="https://i.imgur.com/DuoFrTo.jpg"
             channel="Warner Bros. Pictures"
             verified
             image="https://i.imgur.com/Mtz0w0b.jpg"

           />

          <VideoCard
             title="Taarak Mehta Ka Ooltah Chashmah - तारक मेहता का..."
             views="25M Views"
             timestamp="3 years ago"
             channelImage="https://i.imgur.com/tSwvgTM.jpg"
             channel="Sony SAB"
             verified
             image="https://i.imgur.com/4hVopWA.jpg"

           />

           <VideoCard
             title="Building Coinbase with React Native (Redux, Firebase)"
             views="15.8K Views"
             timestamp="Streamed 4 days ago"
             channelImage="https://i.imgur.com/E5dkOnS.jpg"
             channel="Clever Programmer"
             verified
             image="https://i.imgur.com/dEuqmqf.jpg"

           /> 
           
           <VideoCard
             title="YOUTUBE vs TIKTOK: THE END | CARRYMINATI"
             views="76M Views"
             timestamp="9 months ago"
             channelImage="https://i.imgur.com/fRgkbSp.jpg"
             channel="CarryMinati"
             verified
             image="https://i.imgur.com/gPYpdQk.jpg"

           />

           <VideoCard
             title="PM Modi's address to the Nation"
             views="483K Views"
             timestamp="Streamed live 1 hour ago"
             channelImage="https://i.imgur.com/dJ7Ohht.jpg"
             channel="Narendra Modi"
             verified
             image="https://i.imgur.com/pJwbN9U.jpg"

           />

          <VideoCard
             title="Kabir Singh: Tera Ban Jaunga | Shahid K, Kiara A, Sandeep V..."
             views="360M Views"
             timestamp="2 years ago"
             channelImage="https://i.imgur.com/XpqJUzv.jpg"
             channel="T-Series"
             verified
             image="https://i.imgur.com/FFZoRIr.jpg"

           />

          <VideoCard
             title="Badshah - Paani Paani | Teaser | Jacqueline F | Aastha G..."
             views="5.3M Views"
             timestamp="2 days ago"
             channelImage="https://i.imgur.com/ciaaSHX.jpg"
             channel="Saregama Music"
             verified
             image="https://i.imgur.com/z9jmuQV.jpg"

           />

          <VideoCard
             title="The Family Man S2 - What Are We Eating? ft. Manoj..."
             views="7.5M Views"
             timestamp="1 week ago"
             channelImage="https://i.imgur.com/zmxkG0A.jpg"
             channel="Amazon Prime Video India"
             verified
             image="https://i.imgur.com/X4uRwVO.jpg"

           />

           <VideoCard
             title="King - Tu Aake Dekhle | The Carnival | The Last Ride | Pro..."
             views="42M Views"
             timestamp="8 months ago"
             channelImage="https://i.imgur.com/01a16Rc.jpg"
             channel="King"
             verified
             image="https://i.imgur.com/EMKdvRp.jpg"

           /> 
           
           <VideoCard
             title="Forging a KATANA out of Rusted Iron CHAIN"
             views="15.7M Views"
             timestamp="5 months ago"
             channelImage="https://i.imgur.com/ihg65ep.jpg"
             channel="Random Hands"
             verified
             image="https://i.imgur.com/H4lzNHu.jpg"

           />

           <VideoCard
             title="🔴 Build an Airbnb Clone with REACT JS for Beginners!"
             views="171K Views"
             timestamp="10 months ago"
             channelImage="https://i.imgur.com/E5dkOnS.jpg"
             channel="Clever Programmer"
             verified
             image="https://i.imgur.com/d0xFZMg.jpg"

           />

          <VideoCard
             title="WTC Final: Ashwin vs Williamson - Who holds the..."
             views="18.3K Views"
             timestamp="5 hours ago"
             channelImage="https://i.imgur.com/LVFU2mj.jpg"
             channel="Cricbuzz"
             verified
             image="https://i.imgur.com/wBcQYu6.jpg"

           />

          <VideoCard
             title="AndhaDhun | Official Trailer | Tabu | Ayushmann K | Radhika"
             views="25.8M Views"
             timestamp="2 years ago"
             channelImage="https://i.imgur.com/LgvCZ1y.jpg"
             channel="Viacom18 Studios"
             verified
             image="https://i.imgur.com/sDX2zNm.jpg"

           />

         </div>

       </div>
    );
}

export default RecommendedVideos;