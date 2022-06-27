import "../stylesheets/home.css";
//import {quickPicks, displayMyFavourite, onloadData} from "../JS file/inde.js";
import { useEffect } from "react";
// import ScriptTag from 'react-script-tag';
//import {Helmet} from "react-helmet";

const Home = () => {
  {
    /* <ScriptTag type="text/javascript" src="../JS file/inde.js" /> */
  }

  // useEffect(() => {  quickPicks();}, [])
  // useEffect(() => {  displayMyFavourite();}, [])
  //  useEffect(() => {  onloadData();}, [])

  

  return (
    
    <main>
       {/* <Helmet>
    <script src="../JS file/inde.js"/>
    </Helmet>
    <Helmet>
    <script src="../JS file/newReleases.js" />
    </Helmet> */}
     
       <div id="index1stContainer" class="container text-white row">
            <div class="h1 row text-center">Trending Songs</div>
            {/* <button id="rightButton1" class="row-1">&#10095</button> */}
            {/* <button id="leftButton2" class="row-1">&#10094</button> */}
            <div id="container1" class="row m-3"></div>
        </div>
        <div id="container1" class="row m-3"></div>
      <div class=" row " id="row">
        <div class="h1 col-1 chart">Charts</div>
        <div class="h-6 col-1 text-muted see-all1">SEE ALL</div>
      </div>
      <div class="row col-5 top">
        <div class="col-4" id="top-100-music">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://yt3.ggpht.com/4qRV3ufC8BliwLhJ_Nc35ez5gK73m7kmyUa_-8u908sAA3IH5bmQ3voUVdnPMwwXKQhrd33ockU=s576"
            />
          </div>
          <div class="fs-6 pt-2  me-5 top100" id="top">
            Top 100 Music videos India
          </div>
          <div class="fs-6 py-0 text-muted">Chart • YouTube Music</div>
        </div>
        <div class="col-4" id="top-20">
          <div id="top100Songs">
            <img src="https://yt3.ggpht.com/Xbh97yydekQTzF8OpDD_HynM7vBC6NjvPGuhY2Ci1mHaQhRG6e7AizBkz3ErtewmeVU4AKPYtg4B=s576" />
          </div>
          <div class="fs-6 pt-2  me-5 trending">Trending 20 India</div>
          <div class="fs-6 py-0 text-muted">Chart • YouTube Music</div>
        </div>
        <div class="col-4" id="top-100-global">
          <div id="top100Songs">
            <img src="https://yt3.ggpht.com/wV9dgN_3SN89DkNHRQRZkJHCKXqNeOXRpoy-YQhA2ICMFsIAzT5snzfXad5VNG2HBvEaRxa41Q=s576" />
          </div>
          <div class="fs-6 pt-2  me-5 video">Top 100 Music videos Global</div>
          <div class="fs-6 py-0 text-muted">Chart • YouTube Music</div>
        </div>
      </div>

      <div class="h-6 row text-muted cele">
        CELEBRATE LOVE THE OLD FASHIONED WAY
      </div>
      <div class="h1 row old">Old School Romance</div>
      <div class="row col-11 old2">
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/_HUatpCwcYCE4imurNss9PJtjKwfMKUHhMnObGl6rDvNiBPdd2zIlBXsPRS-CHX2uAi-aEvvNK7NPrpH=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5 bolly">00s Bollywood Romance</div>
          <div class="fs-6 py-0 pe-4 text-muted shreya">
            Shreya Ghoshal, A. R. Rahman, Sonu Nigam, Sunidhi Chauhan
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/7HyfXNDGncXkTOKHbq82jWqOgn_sZXhhGjmT-xNq1RVGfa8Zqhtnu4TabHE8dudrvvAiK3hlO-Tfjmk=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5"> 90s Bollywood Romance</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Alka Yagnik, Kumar Sanu, Udit Narayan, Lata
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/WF_awOg3a42iTaXFEobQIr_aw3GrIhxDc9EkGamtrsdvz0JW2-YhDAgccSbnxga3r64q5WWCp5Myw8A=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Ghazal-e-Guftagoo</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Pankaj Udhas, Jagjit Singh, Mohammed Rafi, Mehdi Hassan
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/7HyfXNDGncXkTOKHbq82jWqOgn_sZXhhGjmT-xNq1RVGfa8Zqhtnu4TabHE8dudrvvAiK3hlO-Tfjmk=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">80s Bollywood Romance</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Kishore Kumar, Lata Mangeshkar, Asha Bhosle, Jagjit Singh
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/TVqceZJVs1r_HJDJn6kXCIgc4b0A1wAS2DdPaM2nRTZ74ulwtElRoh6VKpfQvDwHyj8_QH68cd2mk8Y=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Bollywood Retro Romance</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Lata Mangeshkar, Kishore Kumar, Mohammed Rafi, Asha Bhosle
          </div>
        </div>
      </div>

      <div class="h-6 row text-muted hitlist">Bollywood Hitlist</div>
      <div class="h2 row hits">Hits as Lit as Diwali</div>
      <div class="row col-11 hitlist2">
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/KWWcqh3nCMGBQajKgTPPFghRX_iMNqEa2NLtfcY8S7Wb30aitChTykgvVfqzvg4D9TVxlX3OoLCukz1r=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5"> Bollywood Dance Hitlist</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Badshah, Sachin–Jigar, Tony Kakkar, Honey Singh
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/rSL-XRadq63p-sQZWAYyHW6JJsnjgQK6ai646DI7zciShGxc6LWwIywc8qocdL-mHn_TZkRqE0Mu3dQ=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Uncut Bollywood</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Uncut Bollywood Arijit Singh, Neha Kakkar, Darshan Raval, Abhijit
            Vaghani
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/eNw6xSkhQ56m6_KvHCszMBy8mOqDJFUuap5VCFlff0wG7bcJ7g8V3iFZ1YskyklAV5JEYECuPtlvHfg=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">I-Pop Hits!</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Jubin Nautiyal, Meet Bros, Darshan Raval, Badshah
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/UqUGckVYTPbDB-MHT6d26YEXDPniSzSrWXntTk4EMAbq3hwqfe1_cWNR60xP2g61rjqmRZ88q5wqEw=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">EKDUM</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Emiway Bantai, Badshah, Divine, Karma
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/GsyxoL64XtovmMPnPb888H_sEAaaiUn3W_iRwSRKt21yu_ALpgpK7_USpwZuHrfyn8GT6Rynz1rcnDD5=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Ishq Sufiyana</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Rahat Fateh Ali Khan, A. R. Rahman, Emraan Hashmi, Nusrat Fateh Ali
            Khan
          </div>
        </div>
      </div>

      <div class="h-6 row text-muted discover">
        DISCOVER THE RICH AND DIVERSE MUSICAL LANDSCAPE OF INDIA
      </div>
      <div class="h2 row sound ">Sounds of India</div>
      <div class="row col-11 discover2">
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/OarbpjYZD-KpXoK-uXVTxxnfidd6D9NX5TjjQyK99pJ7UZEzGK-Pakh1ye3ODDbhFE-iuYeazde2964=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5"> Bollywood EDM</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Badshah, Honey Singh, Meet Bros, K.K.
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/Xz1P2AAgTUWyq5in-WqX6JqTs9SGpk2yQ6p7ZD4MJOnlE2Jf0fqheDZ7QXfr-dqOpBgXK1kdhQ_BGwI=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Mohabbat-e-Sufi</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Shankar–Ehsaan–Loy, Javed Bashir, Nusrat Fate
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/UWsUTS0zPmOsJ9oPNTwRsfZvWGdeFV-4izjYBSH5RjAzZwoL7vhmztXWH0dMiiPAvDc32IuId3UREg=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Desi Hip Hop Workout</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Divine, Raftaar, Prabh Deep, Emiway Bantai
          </div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/3x7xnZ05momg4DtS5vuyce44KI1X1aDOzYJJpApWAB4Z9hqCgFTVuP9Puvothgp9NiYpyTnImBMDbA=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Bollywood Pick Me Up</div>
          <div class="fs-6 py-0 pe-4 text-muted">Emiway Bantai, Badshah,</div>
        </div>
        <div class="col-2">
          <div id="top100Songs">
            <img
              class="m-auto"
              src="https://lh3.googleusercontent.com/MLMK35cEn11c3wiRMHdzq3vpUMhRGsFAQvOwKAXrkg1MOaK3ai_RlJ48rzH7gBSkLl21HtEk5nM1VSmp=w544-h544-l90-rj"
            />
          </div>
          <div class="fs-6 pt-2  me-5">Ishq Sufiyana</div>
          <div class="fs-6 py-0 pe-4 text-muted">
            Rahat Fateh Ali Khan, A. R. Rahman, Emraan Hashmi, Nusrat Fateh Ali
            Khan
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
