let nav = document.getElementById('navbar');
let navbar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light  d-flex justify-content-between fixed-top px-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><span class="text-danger">Z</span>Code</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                    <a class="nav-link" href="/index.html#services">Services</a>
                    <a class="nav-link" href="">Course</a>
                    <a class="nav-link" href="/Pages/Contact.html">Contact</a>
                </div>
            </div>
        </nav>
`;

nav.innerHTML=navbar;