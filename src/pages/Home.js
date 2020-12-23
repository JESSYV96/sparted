import m from "mithril";

function Home() {
    let photos;
    const displayAuthorHandler = (e, id) => {
        const photo = document.getElementById(`photo${id}`)
        const author = document.getElementById(`author${id}`)
        if (e.type === 'mouseenter') {
            photo.style.opacity = 0.7
            author.style.opacity = 1
        }
        if (e.type === 'mouseleave') {
            author.style.opacity = 0
            photo.style.opacity = 1
        }
    }

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
                    {photos && photos.map((photo, index) => (
                        <div
                            onmouseenter={(e) => displayAuthorHandler(e, photo.id)}
                            onmouseleave={(e) => displayAuthorHandler(e, photo.id)}
                            key={photo.id}
                            class={`photo-${index}`}>
                            <img
                                id={`photo${photo.id}`}
                                title='mon image'
                                src={`${photo.download_url}`}
                                alt='nom_image' />
                            <div
                                id={`author${photo.id}`}
                                class='author-container'>
                                <h2 class='author-name'>{photo.author}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        )
    }
}

export default Home