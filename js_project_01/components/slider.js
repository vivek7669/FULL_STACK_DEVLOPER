// import { Carousel, initMDB } from "mdb-ui-kit";

// initMDB({ Carousel });
const carousel = () => {
    return `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828582.jpg?t=st=1719317242~exp=1719320842~hmac=ab001c3381836b383665349ac541441461c1163a7185b8b0bec58816310864ee&w=1380" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575384.jpg?t=st=1719317285~exp=1719320885~hmac=6b16a9bcc059c060f151281e64d6bed742779ae87dae9410b112e104def57a66&w=1380" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.freepik.com/free-photo/beautiful-dark-skinned-woman-surrounded-by-clothes-rack_273609-37387.jpg?t=st=1719317572~exp=1719321172~hmac=225d85910cf0cd9cb111491969b655588c2348a718e9da39e6af19bb81785236&w=1380" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <i class="fa-solid fa-caret-left text-dark"></i>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next " href="#carouselExampleIndicators" role="button" data-slide="next">
    <i class="fa-solid fa-caret-right text-dark"></i>
    <span class="sr-only">Next</span>
  </a>
</div>`
}

export default carousel;