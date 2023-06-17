<!-- <script setup>

  import img_decoration from '../../src/assets/img/img_decoration.png'
  import img_portfolio3 from '../../src//assets/img/img-portfolio/img-dzikirkita1.png'

</script> -->
<template>
  <div class="modal-overlay">
    <div class="modal">
      <img class="check" src="" alt="" />
      <h6>Saved!</h6>
      <p>Your Details have been saved Successfully</p>
      <button>Go Home</button>
    </div>
    <div class="close" @click="$emit('close-modal')">
      <button class="btn">Uppsss.. Portfolio belum tersedia <br> <span style="color:rgb(255, 149, 0)">OK</span></button>
    </div>
  </div>
</template>

<script>
  export default {
}
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #00000088;
}

.modal {
  opacity: 1 !important;
  text-align: center;
  background-color: white;
  /* background-color: rgb(255, 149, 0); */
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  opacity: 1 !important;
  padding: 0 !important;
  margin: 0 !important;
  /* margin: 10% 0 0 16px; */
  cursor: pointer;
}
.btn {
  box-shadow: inset 0px 0px 20px 10px rgba(60, 60, 60, 0.9) !important;
  border: 0.05vw solid #fff;
  opacity: 1 !important;
  margin-top: 25vw !important;
  font-size: 1.4vw;
  color: #f4f4f4;
  border-radius: 0.5vw !important;
  background-color: #ffffff19;
  backdrop-filter: blur(7px);
  height: 7vw;
  width: 30vw;
  padding-top:0.8vw ;
  padding-bottom:0.8vw ;
}
.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>