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
    }
    const ramdomizeArray = (arrayToRandom, arrayRandomized = [], randomNumberMax) => {
        arrayToRandom.map((photo) => {
            let newIndex = Math.floor(Math.random() * randomNumberMax)
            if (!arrayRandomized[newIndex]) {
                return arrayRandomized[newIndex] = photo
            } else {
                while (arrayRandomized[newIndex]) {
                    newIndex = Math.floor(Math.random() * randomNumberMax)
                    if (!arrayRandomized[newIndex]) {
                        return arrayRandomized[newIndex] = photo
                    }
                }
            }
        })
    }

    return {
        oncreate: () => {
            m.request({
                method: "GET",
                url: `https://picsum.photos/v2/list?page=${randomNumber}&limit=7`,
            }).then(function (result) {
                let ramdomPhotos = []
                ramdomizeArray(result, ramdomPhotos, 7)
                return photos = ramdomPhotos
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