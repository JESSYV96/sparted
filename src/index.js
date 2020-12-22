import m from "mithril";

function Home() {
    return {
        view: () => (
            <main>
                <h1>Hello world</h1>
            </main>
        )
    }
}

m.route(document.body, '/', {
    '/': Home
})
