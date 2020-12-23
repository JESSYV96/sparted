import m from "mithril";

function Home() {
    return {
        oninit: function (vnode) {
            m.request({
                method: "GET",
                url: "https://picsum.photos/v2/list?page=2&limit=7",
            }).then(function (result) {
                console.log(result)
            })
        },
        view: (ctrl) => (
            <main>
                <div class='gallery'>
                    <div class="photo-1">
                        <img src="https://picsum.photos/1000/1000" />
                    </div>
                    <div class="photo-2">
                        <img src="https://picsum.photos/1000/1000" />
                    </div>
                    <div class="photo-3">
                        <img src="https://picsum.photos/1000/1000" />
                    </div>
                    <div class="photo-4">
                        <img src="https://picsum.photos/1000/1000" />
                    </div>
                    <div class="photo-5">
                        <img src="https://picsum.photos/1000/1000" />
                    </div>
                    <div class="photo-6">
                        <img src="https://picsum.photos/1000/1000" />
                    </div>
                    <div class="photo-7">
                        <img src="https://picsum.photos/1000/1000" />
                    </div>
                </div>
            </main>
        )
    }
}

export default Home

const styles = {
    photo1: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    photo2: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    photo3: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    photo4: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    photo5: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    photo6: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    photo7: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    photo8: {
        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
}
