import m from "mithril";

function Photo() {
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
        view: (ctrl) => (
            <>
                <div
                    onclick={ctrl.attrs.displayModal}
                    onmouseenter={(e) => displayAuthorHandler(e, ctrl.attrs.id)}
                    onmouseleave={(e) => displayAuthorHandler(e, ctrl.attrs.id)}
                    class={`photo-${ctrl.attrs.index}`}>
                    <img
                        id={`photo${ctrl.attrs.id}`}
                        title='mon image'
                        src={`${ctrl.attrs.imageUrl}`}
                        alt='nom_image' />
                    <div
                        id={`author${ctrl.attrs.id}`}
                        class='author-container'>
                        <h2 class='author-name'>{ctrl.attrs.author}</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default Photo