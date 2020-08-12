<template>
    <div class = "header-bg">
        <div class="navbar">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="/"><h1>LoCar</h1></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#/agencia">Agências</a>
                    </li>
                    <li class="nav-item dropdown">
                        <b-nav-item-dropdown text="Veículos">
                            <b-dropdown-item href = "#/carro">Carros</b-dropdown-item>
                            <b-dropdown-item href = "#/moto">Motos</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#/seguro">Seguro</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    </div>
</template>
<style>
    .header-bg {
    position: relative;
    width: 100%;
    height: 80px;
    background-image: linear-gradient(to right, #5bb1cd,#3ca2c3);
    }
</style>
<script>
export default {
  name: 'navbar',
  data () {
    return {}
  }
}
</script>
