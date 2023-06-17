<template>
    <div class="container-fluid">
        <div id="header-section">
            <navbar />
        </div>
        <div id="aricle-ection">
            <router-view />
        </div>
        <div id="footer-section">
            <footerr />
        </div>
    </div>
</template>
<script setup>
import dashboard from '../src/views/dashboard/index.vue'
import footerr from '../src/components/footer.vue'
import navbar from '../src/components/navbar.vue'
import profile from '../src/assets/img/profile.png'
import img_decoration from '../src/assets/img/img_decoration.png'
</script>

<style scoped>
.container-fluid {
    padding: 0 !important;
    background-color: var(--primary-background);
}
</style>