const navbar = () => {
    return `<ul class="nav nav-tabs bg-dark p-2">
  <li class="nav-item  mx-3">
    <a class="nav-link text-dark active" href="../index.htm">HOME</a>
  </li>
  <li class="nav-item  mx-3" id="user-block">
  <a class="nav-link font-weight-bold text-light user-name " href="../index.htm">USER</a>
  </li>

  <li class="nav-item" id="sign_in">
    <a class="nav-link text-light" href="../web/login.htm">SIGN_IN</a>
  </li>
  <li class="nav-item" id="sign_up">
    <a class="nav-link text-light" href="../web/sign_up.htm">SIGN_UP</a>
  </li>
  <li class="nav-item" id="add_product">
    <a class="nav-link text-light" href="../web/add_product.htm">Add Product</a>
  </li>
  <li class="nav-item" id="logout" style="cursor:pointer;">
    <a class=" bg-dark nav-link text-light float-right logof" href = '../web/login.htm'>LOGOUT</a>
  </li>
</ul>`;
}

export default navbar;