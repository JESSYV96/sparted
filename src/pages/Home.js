import m from "mithril";
import Photo from '../components/Photo.js'

function Home() {
    let photos;

    return {
        oncreate: () => {
            m.request({
                method: "GET",
                url: "https://picsum.photos/v2/list?page=2&limit=7",
            }).then(function (result) {
                photos = result
            })
        },
        view: () => (
            <main>
                <div class='gallery'>
                    {photos && photos.map((photo, index) => <Photo
                        index={index}
                        id={photo.id}
                        author={photo.author}
                        imageUrl={photo.download_url} />
                    )}
                </div>
            </main>
        )
    }
}

export default Home