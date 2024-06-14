const navbar = () => {
    return `<ul class="nav nav-tabs bg-dark p-2">
  <li class="nav-item text-light  mx-3">
    <a class="nav-link text-dark active" href="../index.htm">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="../web/login.htm">SIGN_IN</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="../web/sign_up.htm">SIGN_UP</a>
  </li>
  <li class="nav-item  w-75">
    <a class="nav-link text-light float-right" href="#">LOGOUT</a>
  </li>
</ul>`;
}

export default navbar;