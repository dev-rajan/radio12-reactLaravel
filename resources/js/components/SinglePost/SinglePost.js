import { Scoped } from "kremling";
import React from "react";
import LongAdItem from "../common/ads/LongAdItem";
import SquareAd from "../common/ads/SquareAd";
import Latest from "../common/sidebar/Latest";
import OnAir from "../common/sidebar/OnAir";
import Popular from "../common/sidebar/Popular";
import Breadcrumb from "../utility/Breadcrumb";
import Tags from "../utility/Tags";
import Avatar from "../../assets/img/avatar.svg";
import Calendar from "../../assets/img/calendar.svg";
import LongAd from "../common/ads/LongAd";
import Related from "../utility/Related";
import Comment from "../utility/Comment";

const SinglePost = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        <main>
          <div className="main-side">
            <Breadcrumb
              category="Categories"
              title="हास्यकलाकार मनोज गजुरेलको जीवन : सातामा एक दिन ‘विद्युतीय व्रत’ !"
            />

            <LongAdItem extraStyle="width48" />

            <h3 className="highlight">{Items?.title}</h3>
            <br />
            <div className="updated-wrapper">
              <Tags title={Items?.tags} />

              <div className="updated">
                <img
                  src={Avatar}
                  alt={Items?.title}
                  className="icon date-icon"
                />
                <span className="date">{Items?.author}</span>
              </div>

              <div className="updated">
                <img
                  src={Calendar}
                  alt={Items?.title}
                  className="icon date-icon"
                />
                <span className="date">{Items?.updatedDate}</span>
              </div>
            </div>

            <LongAd extraStyle="width100" />

            <div className="single">
              <div className="video-holder">
                <iframe
                  className="you-video"
                  src={Items?.videoUrl}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              {/* <img
                src={Items?.imageUrl.default}
                alt={Items?.title}
                className="single__img"
              /> */}

              <LongAdItem extraStyle="width48" />

              <article className="single__content">{Items?.content}</article>
            </div>
            <Comment>
              <div>comment</div>
            </Comment>

            <LongAdItem extraStyle="width48" />
            <Related Items={Items?.related} />
          </div>

          <div className="right-side">
            <SquareAd />
            <SquareAd />
            <OnAir />
            <SquareAd />
            <Latest />
            <SquareAd />
            <Popular />

            {/* <!--  <Podcast/> --> */}
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default SinglePost;

const Items = {
  id: "1",
  title: "हास्यकलाकार मनोज गजुरेलको जीवन : सातामा एक दिन ‘विद्युतीय व्रत’ !",
  content: `समयअनुसार खानकुरा मन पर्दोरहेछ । एकताका मासु असाध्यै मन पथ्र्यो । ३५ कटेपछि पोको पारेको मासु अर्थात् मःमः मन पर्न थाल्यो । 
                        पाँच–सात वर्षयता फलफूल, गेडागुडी, दूध मन पर्न थालेको छ । त्यसो भन्दैमा अन्य खानेकुरा मन पर्दैन भन्न खोजेको होइन । खानेकुराको मामिलामा म सबैभन्दा सजिलो मानिस हुँ ।
                        <br>
                        भोज खान जाँदा त्यहाँ राखिएका सबै परिकार खानुपर्छ भन्ने छैन । आफूलाई मन परेकोमात्रै खानुपर्छ । हाम्रो भान्सामा दाल, भात, तरकारी, अचार पाक्छ । 
                        चारमध्ये आफूलाई मन परेकोमात्रै खाँदा हुन्छ । सबै खानुपर्छ भन्ने छैन बेलुकाको खाना घरमा कमै खान्छु । 
                        रेष्टुरेन्ट पुगिहाल्दा फिङ्गर चिप्स माग्न बिर्सन्न । त्योसँगै भेज सी मःमः माग्छु । रुचि नभए पनि आवश्यकताअनुसार पकाउँछु ।<br><br>
                        फुर्सद कसैलाई हुँदैन, निकाल्ने हो । जसले मलाई फुर्सद छैन भन्छ कि त उसले कामलाई प्राथमिकतामा राखेन कि उसको इच्छाशक्ति छैन । 
                        संसारमा जो–जो सफल भए, उनीहरूसँग पनि २४ घन्टा नै थियो, हामीसँग पनि त्यति नै समय हो । तर, हामी आफूले आफैंलाई ढाँटिरहेका हुन्छौं । 
                        बेफुर्सदीले शारीरिक र मानसिक थकान लाग्छ । मैले ‘विद्युतीय व्रत’ सुरु गरिसकेको छु । म सातामा एक दिन ‘विद्युतीय व्रत’ बस्छु । 
                        सातामा एक दिन टेलिफोन, मोबाइल, इन्टरनेट र टीभीबाट टाढै बस्छु । हाम्रो मस्तिष्कमा रेडियो तरंगले दुःख दिएको छ । 
                        त्यसमाथि चौबीसै घन्टा मोबाइलको अघि पछि हुन्छौं । त्यहाँबाट ‘निगेटिभ इनर्जी’ कति आउला ? त्यसैले विद्युतीय व्रत सुरु गरेको हुँ । 
                        सूचनाका भारी तनावका कारण एउटा कारण हो । तसर्थ, आफूलाई चाहिनेजति मात्रै सूचना लिनुपर्छ । आँखालाई स्वस्थ होइन, हृदयलाई शान्त पार्ने सूचना लिनुपर्छ । 
                        फुर्सद पाइहालेमा ध्यान, योगा, अध्ययन र साथीभाइसँग अन्तरक्रिया गरेर सदुपयोग गर्ने बानी छ ।
                        <br>
                        फुर्सद कसैलाई हुँदैन, निकाल्ने हो । जसले मलाई फुर्सद छैन भन्छ कि त उसले कामलाई प्राथमिकतामा राखेन कि उसको इच्छाशक्ति छैन । 
                        संसारमा जो–जो सफल भए, उनीहरूसँग पनि २४ घन्टा नै थियो, हामीसँग पनि त्यति नै समय हो । तर, हामी आफूले आफैंलाई ढाँटिरहेका हुन्छौं । 
                        बेफुर्सदीले शारीरिक र मानसिक थकान लाग्छ । मैले ‘विद्युतीय व्रत’ सुरु गरिसकेको छु । म सातामा एक दिन ‘विद्युतीय व्रत’ बस्छु । 
                        सातामा एक दिन टेलिफोन, मोबाइल, इन्टरनेट र टीभीबाट टाढै बस्छु । हाम्रो मस्तिष्कमा रेडियो तरंगले दुःख दिएको छ । 
                        त्यसमाथि चौबीसै घन्टा मोबाइलको अघि पछि हुन्छौं । त्यहाँबाट ‘निगेटिभ इनर्जी’ कति आउला ? त्यसैले विद्युतीय व्रत सुरु गरेको हुँ । 
                        सूचनाका भारी तनावका कारण एउटा कारण हो । तसर्थ, आफूलाई चाहिनेजति मात्रै सूचना लिनुपर्छ । आँखालाई स्वस्थ होइन, हृदयलाई शान्त पार्ने सूचना लिनुपर्छ । 
                        फुर्सद पाइहालेमा ध्यान, योगा, अध्ययन र साथीभाइसँग अन्तरक्रिया गरेर सदुपयोग गर्ने बानी छ ।`,
  imageUrl: require("../../assets/img/nath.jpg"),
  videoUrl: "https://www.youtube.com/embed/MvT9H0opM2U",
  author: "केशव खनाल",
  updatedDate: "May 17, 2018",
  tags: "अन्तराष्ट्रिय",
  related: [
    {
      title:
        "सामान्य बन्दै भीमदत्तनगर: बम दिदिबहिनी नियन्त्रणमा, अनुसन्धान जारी",
      content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
      imageUrl: require("../../assets/img/clem.jpg"),
    },
    {
      title: "बलिउड कलाकारको रक्षाबन्धनको सबैभन्दा सुन्दर तस्बिर",
      content:
        "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
      imageUrl: require("../../assets/img/photographer.jpg"),
    },
    {
      title: "भारतका प्रभावशाली सांसदले माल्दिभ्स कब्जा गर्नुपर्ने धम्की दिए",
      content:
        "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
      imageUrl: require("../../assets/img/dayne.jpg"),
    },
    {
      title: "शिशु हत्यारालाई कारबाहीको माग गर्दै औरही बन्द",
      content:
        "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
      imageUrl: require("../../assets/img/matheus.jpg"),
    },
    {
      title: "भदौ १४ र १५ गते उपत्यकाका विद्यालय बन्द गर्ने निर्णय",
      content: "प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ..",
      imageUrl: require("../../assets/img/ionut.jpg"),
    },
    {
      title: "बिमस्टेक शिखर सम्मेलनः तय भए १६ वटा एजेण्डा",
      content: "व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्र छ..",
      imageUrl: require("../../assets/img/hijab.jpg"),
    },
  ],
};

const css = `
& .single__img {
    width: 100%;
    height: 46rem;
    border-radius: 10px;
    margin-top: 2rem;
  }
 & .single__content {
    width: 90%;
    margin: 2rem auto;
    color: var(--title-text-color);
    font-size: 2rem;
    line-height: 1.6;
    font-weight: 500;
    text-indent: 30px;
    text-align: justify;
  }
 & .video-holder {
    position: relative;
    height: 46rem;
    width: 100%;
    background-color: #979797;
    border-radius: 10px;
    overflow: hidden;
  }
  @media only screen and (max-width: 1200px) {
   & .single__img {
      height: 45rem;
    }
   & .video-holder {
      height: 45rem;
    }
  }
  @media only screen and (max-width: 1050px) {
   & .single__img {
      height: 40rem;
    }
   & .video-holder {
      height: 40rem;
    }
  }
  @media only screen and (max-width: 900px) {
   & .single__img {
      height: 35rem;
    }
   & .video-holder {
      height: 35rem;
    }
   & .single__content {
      width: 90%;
    }
  }
  @media only screen and (max-width: 750px) {
   & .single__img {
      height: 40rem;
    }
   & .video-holder {
      height: 40rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .single__img {
      height: 30rem;
    }
   & .video-holder {
      height: 30rem;
    }
   & .single__content {
      width: 100%;
    }
  }
  
`;
