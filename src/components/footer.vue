<script setup>
    const recaptchaScript = document.createElement("script");
        recaptchaScript.setAttribute(
          "src",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"
        );
        document.head.appendChild(recaptchaScript);
    import instagram from '../assets/img/instagram.png'
    import youtube from '../assets/img/youtube.png'
    import dribbble from '../assets/img/dribbble.png'
    import github from '../assets/img/github.png'
    import logoagus from '../assets/img/logoagus.svg'
</script>
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
            <footer id="footer">
                <div class="container">
                    <div class="row justify-content-between">
                      <div class="col-sm-4 col-md-3 item">
                          <h3>Contact</h3>
                          <ul>
                              <li><i class="icon ion-android-add" style="margin-right:1vw"></i>
                                <a href="https://y5ywx86l8v5.typeform.com/to/nGHjAZch" >Direct Order</a></li>
                              <li><i class="icon ion-ios-email" style="margin-right:1vw"></i>
                                <a>agusikhsan08@gmail.com</a></li>
                              <li><i class="icon ion-social-whatsapp" style="margin-right:1vw"></i>
                                <a href="https://wa.me/+6289619751411">+62 896 1975 1411</a></li>
                          </ul>
                      </div>
                      <div class="col-sm-4 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                              <li><a>Web Development</a></li>
                              <li><a>Mobile Development</a></li>
                              <li><a>Web Design</a></li>
                            </ul>
                      </div>
                      <div class="col-sm-4 col-md-3 item">
                            <h3>Documentation</h3>
                            <ul>
                              <li><a href="https://www.figma.com/file/mMldUwLcYp1pU82v0lRTTx/
                                Portfolio-Agus?type=design&node-id=0-1&t=urdl5726JV9fQO24-0">Mockup UI Design (Figma)</a></li>
                              <li><a href="https://wa.me/+6289619751411">Source Code</a></li>
                            </ul>
                      </div>
                        <div class="col-lg-3 item social">
                          <a href="https://github.com/AgusIhsan"><i class="icon ion-social-github"></i></a>
                          <a href="https://dribbble.com/agusihsan"><i class="icon ion-social-dribbble"></i></a>
                          <a href="https://www.instagram.com/hernamepleasee"><i class="icon ion-social-instagram"></i></a>
                          <a href="https://www.youtube.com/@agusmayhazan2444"><i class="icon ion-social-youtube"></i></a>
                            <p class="copyright">AgusIhsan | © 2023</p>
                        </div>
                    </div>
                </div>
            </footer>
</template>

<style scoped>

#footer {
  margin-top: 5vw;
  padding:50px 0;
  background-image: url("../assets/img/bg_content.png");
  background-color:var(--secondary-background);
  color:var(--text-white);
}

#footer h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

#footer ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

#footer ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

#footer ul a:hover {
  color: var(--text-orange);
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);
  text-shadow: 0 2px 10px rgba(241, 128, 8, 0.878) !important;
}

#footer .item.social {
  text-align:right;
}

@media (max-width:767px) {
  #footer .item {
    text-align:center;
    padding-bottom:20px;
  }
}

@media (max-width: 768px) {
  #footer .item.social {
    text-align:center;
  }
}

#footer .item.social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin-left:10px;
  margin-top:22px;
  color:inherit;
  opacity:0.75;
}

#footer .item.social > a:hover {
  color: var(--text-orange);
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);
  text-shadow: 0 2px 10px rgba(241, 128, 8, 0.878) !important;
}

@media (max-width:991px) {
  #footer .item.social > a {
    margin-top:40px;
  }
}

@media (max-width:767px) {
  #footer .item.social > a {
    margin-top:10px;
  }
}

#footer .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}

</style>