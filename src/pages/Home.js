import m from "mithril";
import Photo from '../components/Photo.js'
import Modal from '../components/Modal.js'

function Home() {
    let photos;
    let selectedPhotoUrl;
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    const displayModalHandler = (id, imageUrl) => {
        let modal = document.querySelector(`.modal-bg`)
        selectedPhotoUrl = imageUrl
        modal.classList.add('modal-active')
    }
    const hideModalHandler = () => {
        let modal = document.querySelector(`.modal-bg`)
        modal.classList.remove('modal-active')
        console.log(modal)
    }

    return {
        oncreate: () => {
            m.request({
                method: "GET",
                url: `https://picsum.photos/v2/list?page=${randomNumber}&limit=7`,
            }).then(function (result) {
               return photos = result
            })
        },
        view: () => (
            <main>
                <div class='gallery'>
                    {photos && photos.map((photo, index) => (
                        <>
                            <Photo
                                displayModal={() => displayModalHandler(photo.id, photo.download_url)}
                                index={index}
                                id={photo.id}
                                author={photo.author}
                                imageUrl={photo.download_url} />
                        </>
                    ))}
                </div>
                <Modal
                    hideModal={() => hideModalHandler()}
                    photoUrl={selectedPhotoUrl} />
            </main>
        )
    }
}

export default Home