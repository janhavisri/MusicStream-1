import "../stylesheets/library.css";
const Library = () => {
return(
    <main>
        <div id="top-header" class="bg-black">
            <div id="top-options">
                <div class="tab active active-link">PLAYLISTS</div>
                <div class="tab">VIDEOS</div>
                <div class="tab">SONGS</div>
                <div class="tab">ARTISTS</div>
            </div>    
        </div>
        <div id="playlists" class="item-details list-view big-detail"></div>
        <div id="videos" class="item-details list-view big-detail"></div>
        <div id="songs" class="item-details list-view"></div>
        <div id="artists" class="item-details list-view big-detail"></div>
        <div id="details-view" class="item-details list-view"></div>
        <div id="error-page">
            <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="error"/>
            <h1>Something Went Wrong, Try Refreshing the page</h1>
        </div>
    </main>
)
}
export default Library;