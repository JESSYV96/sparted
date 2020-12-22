import m from "mithril";

function Home() {
    return {
        oninit: function (vnode) {
            m.request({
                method: "GET",
                url: "https://picsum.photos/v2/list?page=2&limit=9",
            }).then(function (result) {
                console.log(result)
            })
            m.redraw();
        },
        view: () => (
            <main>
                <h1>Hello world</h1>
            </main>
        )
    }
}

export default Home