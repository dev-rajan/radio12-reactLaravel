import { Scoped } from "kremling";
import React from "react";
import Avatar from "../../assets/img/avatar.svg";
import Calendar from "../../assets/img/calendar.svg";
import Breadcrumb from "../utility/Breadcrumb";
import SpecialProgram from "../utility/SpecialProgram";
import SquareAd from "../common/ads/SquareAd";
import OnAir from "../common/sidebar/OnAir";
import Podcast from "../common/sidebar/Podcast";

const PodcastDetail = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        <main>
          <div className="main-side">
            <Breadcrumb title="podcast-detail" />
            <h3 className="highlight">{podcastDetail?.title}</h3>

            <div className="updated-wrapper">
              <div className="updated">
                <img
                  src={Avatar}
                  alt={podcastDetail?.title}
                  className="icon date-icon"
                />
                <span className="date"> {podcastDetail?.auther}</span>
              </div>

              <div className="updated">
                <img
                  src={Calendar}
                  alt={podcastDetail?.title}
                  className="icon date-icon"
                />
                <span className="date">{podcastDetail?.updatedDate}</span>
              </div>
            </div>

            <div className="podcast-detail">
              <img
                src={podcastDetail?.imageUrl.default}
                alt={podcastDetail?.title}
                className="images"
              />
              <p className="detail">{podcastDetail?.content}</p>

              <div className="audio-player">
                <audio controls controlsList="nodownload">
                  <source src={podcastDetail?.audioUrl} type="audio/ogg" />
                  <source src={podcastDetail?.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <a href={podcastDetail?.audioUrl} className="download" download>
                  Download
                </a>
              </div>
            </div>

            <SpecialProgram />
          </div>
          <div className="right-side">
            <SquareAd />
            <SquareAd />
            <OnAir />
            <SquareAd />
            <Podcast />
            <SquareAd />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default PodcastDetail;

const podcastDetail = {
  id: "1",
  title: "देश परदेश (अडियाे)",
  content: `खाडीका कुवेत र कतार हुन् वा पूर्वी एसियाका कोरिया र मलेसिया ! 
            अथवा युरोप र अमेरिकाका देश नै किन नहुन्, अब धरतीका सातै महादेशमा नेपाली नपुगेका देश छैनन् । 
            विदेशमा नेपालीले नगरेका काम पनि अब थोरै मात्र छन् । वैदेशिक रोजगारी, अध्ययन, अनुसन्धान, ब्यवसाय र जागीरका 
            सिलसिलामा विदेशमा रहेका नेपालीको संख्या झण्डै ५० लाख पुगेको छ । त्यसमध्ये आधाभन्दा बढी 
            जनशक्ति वैदेशिक रोजगारीका सिलसिलामा विदेश पुगेको छ । देश परदेश वैदेशिक रोजगारीमा जाने र गएका नेपालीलाई 
            सुरक्षित, व्यवस्थित र मर्यादित वनाउने मल्टिमिडिया प्लेटफर्म हो । यो प्लेटफर्ममा रेडियो र अनलाईन एकअर्कासित अन्तरंग जोडिएका छन् । 
            विदेश जान चाहने नेपाली र विदेशमा रहेका नेपालीका भावना, भोगाई, चासो र सरोकारका बिषय र घटनाहरु यो 
            प्लेटफर्मका मुख्य बिषयबस्तु हुन् । यिनै बिषयमा हरेक मंगलवार बिहान ८ः२० देखि ९ः०० बजेसम्म देशभरिका सयभन्दा धेरै स्टेशनबाट 
            रेडियो कार्यक्रम देश परदेश प्रसारण हुन्छ । विदेशमा काम गर्न जाने र विदेशमा काम गरिरहेका नेपालीका काम, 
            सीप र कमाईसँग सम्बन्धित अनुभव, कथाव्यथा, जानकारी, प्रश्न उत्तर र समाचार तथा टिप्पणीहरु सँगै रेडियो 
            कार्यक्रम समेत अनलाईन पोर्टलमा समेटिन्छन् । उज्यालोको देश परदेश मल्टिमिडिया प्लेटफर्म तपाईंको साथ र 
            सहयोगमा वैदेशिक रोजगारलाई सुरक्षित, व्यवस्थित र मर्यादित वनाउने अभियान हो । हामी तपाईंलाई आफ्ना अनुभव, सीप, 
            कमाई, सफलता र विफलताका कथा, समाचार, टिप्पणी तथा तपाईंका भोगाई लेखेर, बोलेर र भिडियोमा पठाएर यो अभियानमा 
            साथ दिन र सहयोग गर्न अनुरोध गर्छौ । देश परदेश मल्टिमिडिया प्लेटफर्ममा तपाईंलाई हार्दिक स्वागत छ !`,
  imageUrl: require("../../assets/img/ben.jpg"),
  audioUrl:
    "http://hipmack.co/wp-content/uploads/2018/02/Kendrick_Lamar_Ft_Travis_Scott_-_Big_Shot.mp3",
  auther: "केशव खनाल",
  updatedDate: "Sept. 25, 2018, 8:09 a.m",
};

const css = `
& .player-wrapper {
	border-radius: 5px;
	background-color:#222222;
	box-shadow: 0 5px 8px rgba(0,0,0,0.15);
    margin: auto;
    text-align: center;
}
& .podcast-detail{
    margin-top: 1rem;
}
& .podcast-detail::after{
    content: "";
    display: block;
    clear: both;
}
& .images{
    width: 40%;
    border-radius: 7px;
    float: left;
    margin-right: 2rem;
}
& .detail{
    color: var(--title-text-color);
    text-indent: 20px;
    font-size: 1.9rem;
    line-height: 1.8;
    font-weight: 500;
}
& .download{
    padding: 1.2rem 2.5rem;
    margin-left: 2rem;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 700;
    color: #ffffff ;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-image: var(--btn-gradient);
    background-size: 230%;
    transition: all .4s ease-in-out;
}
& .download:hover{
    background-position: 100%;
}
& .audio-player{
    display: flex;
    align-items: center;
    margin:2rem 0;
}

`;
