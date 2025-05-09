let foot = document.getElementById('footer');
let footer = `
<footer class="bg-light text-dark py-4 mt-5">
  <div class="container">
    <div class="row text-center text-md-start">
      <!-- Logo & Description -->
      <div class="col-md-4 mb-3">
        <h5><span class="text-danger">Z</span>Code</h5>
        <p class="small">Helping you start your coding journey with free content, guidance, and practical tips.</p>
      </div>

      <!-- Quick Links -->
      <div class="col-md-4 mb-3">
        <h6 class="text-uppercase fw-bold">Quick Links</h6>
        <ul class="list-unstyled">
          <li><a href="/index.html" class="text-decoration-none text-secondary">Home</a></li>
          <li><a href="/index.html#services" class="text-decoration-none text-secondary">Services</a></li>
          <li><a href="#" class="text-decoration-none text-secondary">Courses</a></li>
          <li><a href="/Pages/Contact.html" class="text-decoration-none text-secondary">Contact</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="col-md-4 mb-3">
        <h6 class="text-uppercase fw-bold">Contact</h6>
        <p class="small mb-1">zcode@example.com</p>
      </div>
    </div>

    <hr />
    <p class="text-center small mb-0">&copy; 2025 ZCode. All rights reserved.</p>
  </div>
</footer>
`;

foot.innerHTML = footer;