class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <strong class="text-light">Football Player Search App</strong>
                </a>
            </div>
        </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);