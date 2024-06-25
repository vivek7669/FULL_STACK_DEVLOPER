const navbar = () => {
  return `<ul class="nav nav-tabs bg-dark p-2">
  <li class="nav-item  mx-3">
    <a class="nav-link text-dark active home" href="../index.htm">HOME</a>
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
  <li class="nav-item" id="show_products">
    <a class="nav-link text-light sproduct" href="../web/product.htm">product</a>
  </li>
  <li class="nav-item" id="add_product">
    <a class="nav-link text-light" href="../web/add_product.htm">Add Product</a>
  </li>
  <li class="nav-item" id="cartproduct">
    <a class="nav-link text-light cart" href="../web/cart.htm">Cart</a>
  </li>
  <li class="nav-item formData" id="search_product">
        <form class="d-flex justify-content-center align-items-center">      
              <input type="search" class="form-control ml-4 mr-2" id="serchdata" placeholder="Search Any Item...">    
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
  </li>
  <li class="nav-item" id="logout" style="cursor:pointer;clear: both;">
    <a class=" bg-dark nav-link text-light float-right logof" href = '../web/login.htm'>LOGOUT</a>
  </li>
</ul>`;
}

export default navbar;