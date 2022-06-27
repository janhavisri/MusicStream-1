
import "../stylesheets/explore.css";
//import { newAlbums } from "../JS file/explor.js";
// import { useEffect } from "react";
import {Helmet} from "react-helmet";
const Explore = () => {
    
//   useEffect(() => {  newAlbums();}, [])
    return (
        <main>
          <Helmet>
    <script src="../JS file/explor.js"
    type="text/javascript"></script>
    </Helmet>
        <div id="exploreHeading">
        <h1 id="newRelHeading">New albums & singles</h1>
        <span id="newRelAll">SEE ALL</span>
        {/* <div id="container"></div> */}
        </div>
      </main>
    )
}
export default Explore;