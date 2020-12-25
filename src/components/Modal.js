import m from "mithril";

function Modal() {
    return {
        view: (ctrl) => (
            <div
                onclick={ctrl.attrs.hideModal}
                class={`modal-bg`}>
                {ctrl.attrs.photoUrl &&
                    <div>
                        <img
                            class="full-photo"
                            src={ctrl.attrs.photoUrl}
                            alt='nom_image' />
                            <span class="close-modal">x</span>
                    </div>
                }

            </div>
        )
    }
}

export default Modal