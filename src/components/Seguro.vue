<template>
    <div class = "seguro">
        <h1>Tipos de Seguro</h1>
        <hr/>
            <div class = "row cards">
                <div class = "col col-md-4">
                <div class="card cardseguro">
                    <div class="card-body">
                    <div class = "textseguro">
                        <font-awesome-icon icon="car" size="4x" class = "icone" color = "#3ca2c3"/>
                        <h5><b>Total</b></h5>
                        <h6>Cobertura de roubo e perda total do veículo.</h6>
                    </div>
                    </div>
                </div>
                </div>
                <div class = "col col-md-4">
                <div class="card cardseguro">
                    <div class="card-body" >
                    <div class = "textseguro">
                        <font-awesome-icon icon="car-crash" size="4x" class = "icone" color = "#3ca2c3"/>
                        <h5><b>Parcial</b></h5>
                        <h6>Cobertura de arranhões, amassados leves, acessórios danificados e etc.</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
</template>
<style>
    .seguro{
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 5%;
    }
    .cards{
        padding-top: 5%;
        margin-left: 25%;
    }
    .cardseguro{
        width: 300px;
        height: 300px;
    }
    .textseguro{
        text-align: center;
        padding-top: 5%;
    }
    .icone{
        margin-bottom: 8%;
    }
</style>
