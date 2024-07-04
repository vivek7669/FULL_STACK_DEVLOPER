export const nav = () => {
    return `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">  <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../index.htm">POST</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../HTML/patch.htm">PATCH</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../HTML/put.htm">PUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../HTML/delete.htm">DELETE</a>
            </li>
          </ul>
        </div>
      </nav>`
}