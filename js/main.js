

$(function(){
    setTimeout(function() {
        $('.cargando').hide("slow");
        $('#fondoPrincipal').css("display","block");
        $('#fondo-cambiante').css("display","block");
        $('#fondo-cambiante2').css("display","block");
    },1500);

    $('#fila1 .contenedorGalaxy').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/viaLactea.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Via láctea");
        $(".contenido span").html("Es una galaxia espiral donde se encuentra el sistema solar y a su vez se encuentra la Tierra. Según las observaciones, posee una masa de 1012 masas solares y es una espiral barrada.");
    });
    $('#fila2 .contenedorGalaxy:first-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/canisMajor.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Canis Major");
        $(".contenido span").html("Es clasificada como una galaxia irregular se considera la galaxia más cercana a la Via Lactea, situada a unos 25 000 años luz de distancia de nuestro sistema solar1​ y a 42 000 años luz desde el centro galáctico.");
    });
    $('#fila2 .contenedorGalaxy:last-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/sag2cann.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("SagDEG");
        $(".contenido span").html("es una galaxia satélite de la Vía láctea. Con un diámetro de cerca de 10 000 años luz, se encuentra actualmente a 70 000 años luz de la Tierra y se mueve en una órbita polar a unos 50 000 años luz del centro de nuestra galaxia.");
    });
    $('#fila3 .contenedorGalaxy:first-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/LMC.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("LMC");
        $(".contenido span").html("La Gran Nube de Magallanes (abreviada como LMC) es una galaxia enana, satélite de la Vía Láctea y miembro del Grupo Local. Se encuentra a 163.000 años luz​ de distancia iendo la tercera galaxia más próxima a la Vía Láctea.");
    });
    $('#fila3 .contenedorGalaxy:last-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/SMC.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("SMC");
        $(".contenido span").html("La Pequeña Nube de Magallanes (denominada SMC) es una galaxia irregular enana cercana a la Vía Láctea; se encuentra a un promedio de 200.000 años luz de distancia. Hasta los 90s se pensaba que orbitaba alrededor de la Vía Láctea.");
    });
    $('#fila4 .contenedorGalaxy:first-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/osaMenor.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Osa Menor");
        $(".contenido span").html("Es una galaxia satélite de la Vía láctea, su nombre proviene de la constelación en donde se encuentra, la Osa Menor. Se encuentra a 200.000 años luz de la Tierra. Es una galaxia enana esferoidal, una de las más tenues que se conocen.");
    });
    $('#fila4 .contenedorGalaxy:last-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/draco.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Draco");
        $(".contenido span").html("Es una galaxia satélite de la Vía Láctea que forma parte del Grupo Local. Se encuentra en la constelación de Draco, el dragón, a 260.000 años luz de la Tierra. Con un diámetro de aproximadamente 2000 años luz, es una de las galaxias más tenues conocidas.");
    });
    $('#fila5 .contenedorGalaxy:first-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/sextans.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Sextans");
        $(".contenido span").html("La Galaxia Enana de Sextans o SexDEG es una galaxia enana esferoidal satélite de la Vía Láctea, cuyo nombre proviene de la constelación de Sextans, en donde se encuentra. Con un diámetro de 4000 años luz, está actualmente a 280.000 años luz de la Tierra.");
    });
    $('#fila5 .contenedorGalaxy:last-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/Sculptor.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Sculptor");
        $(".contenido span").html("La galaxia enana de Sculptor es una galaxia enana esferoidal situada en la constelación del mismo nombre a una distancia de 290 000 años luz​ del Sol y muy cerca del polo sur galáctico. Fue descubierta en 1937 por Harlow Shapley.");
    });
    $('#fila6 .contenedorGalaxy:first-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/carina.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Sextans");
        $(".contenido span").html("Es una galaxia satélite de la Vía láctea que forma parte del Grupo Local. Se encuentra en la constelación austral de Carina, a 330.000 años luz de la Tierra. Con un diámetro de aproximadamente 2000 años luz, es una galaxia enana esferoidal muy tenue");
    });
    $('#fila6 .contenedorGalaxy:last-child').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/fornax.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("fornax");
        $(".contenido span").html("Es una galaxia satélite de la Vía láctea que forma parte del Grupo Local. Se encuentra en la constelación austral de Fornax, a 460.000 años luz de la Tierra. Con un diámetro de aproximadamente 6000 años luz, fue descubierta en 1938 por Harlow Shapley.");
    });
    $('#filaFinal .contenedorGalaxy').click(function () {
        $("#fondo-cambiante").css("background-image","url(images/fenix.jpg)");
        $(".contenido").css("display","block");
        $("#NombreGalaxia").html("Fenix");
        $(".contenido span").html("Es una galaxia enana e irregular que fue descubierta en 1976 y fue confundida con un cúmulo globular. En la actualidad se halla a 1,44 millones de años luz de la Tierra. Se llama así porque se encuentra en la constelación de Fénix.");
    });
});


