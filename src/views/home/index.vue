<script setup>
import profile from '../../assets/img/profile.png'
import img_decoration from '../../assets/img/img_decoration.png'
import img_portfolio1 from '../../assets/img/img-portfolio/img-iroom.png'
import img_portfolio2 from '../../assets/img/img-portfolio/img-techstore.png'
import img_portfolio3 from '../../assets/img/img-portfolio/img-travelapp.png'
import img_portfolio4 from '../../assets/img/img-portfolio/img-dzikirkita1.png'
import img_portfolio5 from '../../assets/img/img-portfolio/img-travelapp1.png'
import fotoaside from '../../assets/img/me.jpeg'
import SavedModal from '../../components/modalGagal.vue'
import { ref } from 'vue'

const showModal = ref(false);

</script>

<template>

        <article id="home">
          <div class="Hero h-100">
            <div class="col-4 txt_hero">
              
              <p class="txt_wellcome">Welcome to my</p>
              <p class="txt_universe">UNIVERSE.</p>
              <p class="txt_desc">Just a simple dude who want to create an awesome stuff.</p>
              <button onclick="location.href='https://wa.me/+6289619751411'" 
                style="cursor:pointer" class="btn_contact">Contact me!</button>
                </div>
              </div>
        </article>

        <article id="about">
            <div class="about d-flex align-items-left" id="about">
                <div class="img_content">
                    <img class="foto_profile" :src="profile" alt="profile">
                    <img class="img_decoration" :src="img_decoration" alt="img_decoration">
                </div>
                <div class="text_content d-flex align-items-left flex-column">
                  <p class="txt_about">About</p>
                  <p class="txt_about_agus">Agus Ihsan.</p>
                  <p class="txt_desc_aboutt">
                      I’m a simple dude who want to create an awesome stuff, whether it’s solving a complex design 
                      or just fixing the coffee machine in the office. I aim for simple, intuitive solution that will 
                      improve the lives around me. I was studied HTML/CSS/JS at Kuningan University in 2017 till 2021. 
                      and I love teaching myself about graphics and UI/UX design, so I developed by myself about those skills.
                  </p>
                </div>
            </div>
        </article>

        <article id="galery">
          <div class="text_content d-flex align-items-left flex-column">
                  <!-- <p class="txt_about">My</p> -->
                  <p class="txt_about_agus" style="margin-bottom:3vw !important">Gallery.</p>
                </div>
            <div class="gallery d-flex gap-2" id="gallery">
              <div class="image-1"></div>
              <div class="image-2"></div>
              <div class="image-3"></div>
              <div class="image-4"></div>
              <div class="image-5"></div>
              <div class="image-6"></div>
              <div class="image-7"></div>
            </div>
      </article>

      <article id="portfolio">
        <div class="title d-flex justify-content-center">
          <p class="txt_about_agus">Portfolio.</p>
        </div>
      <div class="portofolio">
          <div class="slider">
            <input type="radio" name="testimonial" id="t-1">
            <input type="radio" name="testimonial" id="t-2">
            <input type="radio" name="testimonial" id="t-3" checked>
            <input type="radio" name="testimonial" id="t-4">
            <input type="radio" name="testimonial" id="t-5">
            <div class="testimonials">
              <label class="item" for="t-1">
                <img class="img_portfolio" :src="img_portfolio1" alt="img">
                <p class="txt_desc_about" style="margin-bottom:2vw !important">
                  <strong><b>iRoom</b></strong> - Mobile App yang berfunsi untuk mengontrol 
                  fasilitas ruangan rumah.
                  </p>
                  <button @click="showModal = true" class="btn_portfolio">See more</button>
              </label>
              <label class="item" for="t-2">
                <img class="img_portfolio" :src="img_portfolio2" alt="img">
                <p class="txt_desc_about" style="margin-bottom:2vw !important">
                  <strong><b>Tech Store</b></strong> - Mobile App untuk penjualan alat elektronik.
                  </p>
                  <button @click="showModal = true" class="btn_portfolio">See more</button>
              </label>
              <label class="item" for="t-3">
                <img class="img_portfolio" :src="img_portfolio3" alt="img">
                <p class="txt_desc_about" style="margin-bottom:2vw !important">
                  <strong><b>Travel App</b></strong> - Mobile App untuk reservasi trip traveling.
                  </p>
                  <button @click="showModal = true" class="btn_portfolio">See more</button>
              </label>
              <label class="item" for="t-4">
                <img class="img_portfolio" :src="img_portfolio4" alt="img">
                <p class="txt_desc_about" style="margin-bottom:2vw !important">
                  <strong><b>Dzikir Kita</b></strong> - Mobile App yang berisi doa-doa, 
                  Hadits, Jadwal Sholat dll.
                  </p>
                  <button @click="showModal = true" class="btn_portfolio">See more</button>
              </label>
              <label class="item" for="t-5">
                <img class="img_portfolio" :src="img_portfolio5" alt="img">
                <p class="txt_desc_about" style="margin-bottom:2vw !important">
                  <strong><b>Travel App</b></strong> - Mobile App untuk reservasi trip traveling.
                  </p>
                  <button @click="showModal = true" class="btn_portfolio">See more</button>
              </label>
            </div>
            <br/>
            <div class="dots">
              <label for="t-1"></label>
              <label for="t-2"></label>
              <label for="t-3"></label>
              <label for="t-4"></label>
              <label for="t-5"></label>
            </div>
          </div>
        </div>
      </article>

      <SavedModal v-show="showModal" @close-modal="showModal = false" />
</template>

<style scoped>

@import url("../../assets/css/global.css");
/* styling hero */
.Hero {
  height: 65vw !important;
  background-image: url('../../assets/img/bghero.png');
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
p{
  text-decoration: none !important;
  margin-bottom: 0 !important;
}
.txt_hero {
  margin-left: 10vw;
}
.txt_wellcome {
  line-height: 100% !important;
  padding-top: 17vw;
  font-weight: 200;
  font-size: 4.7vw;
  color: var(--text-white);
}
.txt_universe {
  line-height: 100% !important;
  font-weight: 600;
  font-size: 8.5vw;
  color: var(--text-orange);
}
.txt_desc {
  font-weight: 200;
  font-size: 2vw;
  color: var(--text-white);
}
.btn_contact {
  background-color: transparent;
  font-size: 1.2vw;
  font-weight: 300;
  color: var(--text-orange);
  padding: 8px 24px 8px 24px;
  border-radius: 0.6vw;
  border: 1px solid var(--text-orange);
  margin-top: 1vw;
  transition: all .5s cubic-bezier(.25, .4, .45, 1.4);
}
.btn_contact:hover {
  background-color: #ff93075d;
  background-color: var(--text-orange) !important;
  color: #fff;
  border-radius: 2vw;
  border: 0.07vw solid var(--text-white);
  transition: all .5s cubic-bezier(.25, .4, .45, 1.4);

}

/* Styling About */
.about {
  background: url("../../assets/img/bg_content.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vw;
  padding-top: 4vw;
  padding-right: 4vw;
  background-color: var(--secondary-background);
  border-radius: 0vw 2vw 2vw 0vw;
  margin-right: 10vw;
  box-shadow: 20px 20px 50px #001821;
}
.about .foto_profile {
  width: 30vw;
  margin: var(--margin-left-default);
  margin-top: -10vw !important; 
}
.about .img_decoration {
  margin-bottom: -5vw;
  width: 20vw;
}
.about p {
  text-align: justify;
}
.txt_about {
  line-height: 50% !important;
  font-weight: 200;
  font-size: 2.5vw;
  color: var(--text-white);

}
.txt_about_agus {
  font-weight: 600;
  font-size: 5vw;
  color: var(--text-orange);
}
.txt_desc_about {
  font-size: 1.25vw;
  font-weight: 100;
  color: var(--text-white);
}
.txt_desc_aboutt {
  font-size: 1.25vw;
  font-weight: 100;
  color: var(--text-white);
}
@media (max-width: 684px){
  .txt_desc_aboutt {
  font-size: 8px;
  font-weight: 100;
  color: var(--text-white);
}
}
/* Styling Gallery */
#galery {
  margin-top: 4vw !important;
  margin-right: 10vw !important;
  margin-left: 10vw !important;
}
.gallery {
  background-color: var(--primary-background);
  height: 35vw;
}
.gallery > div {
  flex: 0.8;
  border-radius: 1vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transition: all .8s cubic-bezier(.25, .4, .45, 1.4);
}
.gallery > div:hover {
  flex: 7.5;
  cursor: pointer;
}

.image-1 {
  background-image: url('../../assets/img/img-gallery/img-syubbanulmubarok.png');
}
.image-1:hover {
  background-image: url('../../assets/img/img-gallery/img-syubbanulmubarok-hover.png');
}
.image-2 {
  background-image: url('../../assets/img/img-gallery/img-graduationfam.png');
}
.image-2:hover {
  background-image: url('../../assets/img/img-gallery/img-graduationfam-hover.png');
}
.image-3 {
  background-image: url('../../assets/img/img-gallery/img-si2017a.png');
}
.image-3:hover {
  background-image: url('../../assets/img/img-gallery/img-si2017a-hover.png');
}
.image-4 {
  background-image: url('../../assets/img/img-gallery/img-globalyouth.png');
}
.image-4:hover {
  background-image: url('../../assets/img/img-gallery/img-aiesec-hover.png');
}
.image-5 {
  background-image: url('../../assets/img/img-gallery/img-parenca-fc.png');
}
.image-5:hover {
  background-image: url('../../assets/img/img-gallery/img-parenca-fc-hover.png');
}
.image-6 {
  background-image: url('../../assets/img/img-gallery/img-bem.png');
}
.image-6:hover {
  background-image: url('../../assets/img/img-gallery/img-bem-hover.png');
}
.image-7 {
  background-image: url('../../assets/img/img-gallery/img-karangtaruna.png');
}
.image-7:hover {
  background-image: url('../../assets/img/img-gallery/img-karangtaruna-hover.png');
}
/* .image-1::before{
  content: '';
  display: block;
  height: 40%;
  position: absolute;
  width: 100%;
} */

/* Styling Portfolio */

#portfolio {
  padding: 5vw;
  background: url("../../assets/img/bg_content.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--secondary-background);
  border-radius: 2vw;
  margin-top: 5vw !important;
  margin-right: 10vw !important;
  margin-left: 10vw !important;
}
.portofolio{
	margin: 0;
	color: white;
	font-family: sans-serif;;
	display: flex;
	align-items: center;
	height: 80vh;
}
.slider{
  width: 100%;
}
.slider input{
  display: none;
}
.btn_portfolio {
  background-color: transparent;
  font-size: 1.2vw;
  font-weight: 300;
  color: var(--text-white);
  /* color: #fff; */
  padding: 0.6vw 2vw 0.6vw 2vw;
  border-radius: 0.6vw;
  border: 0.06vw solid #fff;
  margin-top: 1vw;
  transition: all .5s cubic-bezier(.25, .4, .45, 1.4);
}
.btn_portfolio:hover {
  background-color: #ff93075d;
  background-color: var(--text-orange) !important;
  color: #fff;
  /* box-shadow: 0 5px 15px rgba(255, 115, 1, 0.124); */
  /* color: var(--text-white); */
  border-radius: 2vw;
  border: 0.07vw solid#fff;
  transition: all .5s cubic-bezier(.25, .4, .45, 1.4);
}
.img_portfolio {
  width:20vw;
  margin-bottom:2vw;
  border-radius: 0.5vw;
  filter: grayscale(100%);
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);

}
.testimonials{
  margin: 0 !important;
  padding: 0 !important;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 60vh;
	perspective: 14vw;
	overflow: hidden;
}
.testimonials .item{
	width: 32%;
	padding: 1vw;
	border-radius: 1vw;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
	position: absolute;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.471) !important;
	top: 0;
	box-sizing: border-box;
	text-align: center;
	transition: transform 0.4s;
	user-select: none;
	cursor: pointer;
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);

}
.testimonials .item:hover{
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);
  /* box-shadow: 0 10px 20px rgba(255, 124, 1, 0.295) !important; */
  box-shadow: 0 5px 15px rgba(92, 143, 182, 0.157) !important;
	border-radius: 1.5vw;
}
.testimonials .item:hover .img_portfolio{
  filter: grayscale(0%);
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);
  box-shadow: 0 5px 15px rgba(92, 143, 182, 0.39) !important;


}
.dots{display: flex; justify-content: center;align-items: center;}
.dots label{
	height: 5px;
	width: 5px;
	border-radius: 50%;
	cursor: pointer;
	background-color: var(--text-white);
	margin: 7px;
	transition-duration: 0.2s;
}
#t-1:checked ~ .dots label[for="t-1"],
#t-2:checked ~ .dots label[for="t-2"],
#t-3:checked ~ .dots label[for="t-3"],
#t-4:checked ~ .dots label[for="t-4"],
#t-5:checked ~ .dots label[for="t-5"]{
	transform: scale(2);
	background-color: var(--text-orange);
	box-shadow: 0px 0px 0px 3px #dddddd24;
}

#t-1:checked ~ .dots label[for="t-2"],
#t-2:checked ~ .dots label[for="t-1"],
#t-2:checked ~ .dots label[for="t-3"],
#t-3:checked ~ .dots label[for="t-2"],
#t-3:checked ~ .dots label[for="t-4"],
#t-4:checked ~ .dots label[for="t-3"],
#t-4:checked ~ .dots label[for="t-5"],
#t-5:checked ~ .dots label[for="t-4"]{
	transform: scale(1.5);
}

#t-1:checked ~ .testimonials label[for="t-3"],
#t-2:checked ~ .testimonials label[for="t-4"],
#t-3:checked ~ .testimonials label[for="t-5"],
#t-4:checked ~ .testimonials label[for="t-1"],
#t-5:checked ~ .testimonials label[for="t-2"]{
	transform: translate3d(600px, 0, -180px) rotateY(-25deg);
	z-index: 2;
}

#t-1:checked ~ .testimonials label[for="t-2"],
#t-2:checked ~ .testimonials label[for="t-3"],
#t-3:checked ~ .testimonials label[for="t-4"],
#t-4:checked ~ .testimonials label[for="t-5"],
#t-5:checked ~ .testimonials label[for="t-1"]{
	transform: translate3d(300px, 0, -90px) rotateY(-15deg);
	z-index: 3;
}

#t-2:checked ~ .testimonials label[for="t-1"],
#t-3:checked ~ .testimonials label[for="t-2"],
#t-4:checked ~ .testimonials label[for="t-3"],
#t-5:checked ~ .testimonials label[for="t-4"],
#t-1:checked ~ .testimonials label[for="t-5"]{
	transform: translate3d(-300px, 0, -90px) rotateY(15deg);
	z-index: 3;
}

#t-3:checked ~ .testimonials label[for="t-1"],
#t-4:checked ~ .testimonials label[for="t-2"],
#t-5:checked ~ .testimonials label[for="t-3"],
#t-2:checked ~ .testimonials label[for="t-5"],
#t-1:checked ~ .testimonials label[for="t-4"]{
	transform: translate3d(-600px, 0, -180px) rotateY(25deg);
	
}

#t-1:checked ~ .testimonials label[for="t-1"],
#t-2:checked ~ .testimonials label[for="t-2"],
#t-3:checked ~ .testimonials label[for="t-3"],
#t-4:checked ~ .testimonials label[for="t-4"],
#t-5:checked ~ .testimonials label[for="t-4"],
#t-5:checked ~ .testimonials label[for="t-5"]{
	
	z-index: 4;
}
@media (max-width: 684px) {
  #portfolio{
  height: 47vh !important;
  }
}
@media (max-width: 684px) {
  #portfolio .testimonials{
  height: 25vh !important;
	perspective: 35px;
  }
}
@media (max-width: 684px) {
  #portfolio .slider{
    margin-top: -50px;
  height: 65vh !important;
  }
}
@media (max-width: 684px) {
  #portfolio .testimonials .item{
	width: 50%;
	padding: 2vw;

  }
}
@media (max-width: 684px) {
  #portfolio .img_portfolio{
  width:30vw;
  margin-bottom:2vw;
  margin-top:0.5vw;

  }
}
</style>
