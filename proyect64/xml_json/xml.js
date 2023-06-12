$(document).ready(() => {
  $("#XML").click(() => {
      $("#XML").hide();
    $.ajax({
      type: "GET",
      url: "xml.xml",
      dataType: "xml"
    }).done((data) => {
      const perfil = $(data).find("perfil").first();
      let nombres = perfil.find("nombre").text();
      let apellidos = perfil.find("apellido").text();
      let carrera= perfil.carrera("carrera").text();
      let telefono = perfil.find("telefono").text();
      let mail= perfil.find("mail").text();
      let correo = perfil.find("correo").text();

      $("#nombres").append(nombres);
      $("#apellidos").append(apellidos);
      $("#carrera").append(carrera);
      $("#telefono").append(telefono);
      $("#mail").append(mail);
      $("#correo").append(correo);

      $("#contenido").show();
      
    });
  });
});

