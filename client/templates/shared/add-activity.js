Template.addActivity.onRendered(function() {

  $('[name="event-date"]').datepicker();
  $('[name="event-time"]').clockpicker();
  $("#add-activity").validate({
    rules: {
      "sport": {
        required: true
      },
      "pocet-osob": {
        required: true
      },
      "event-date": {
        required: true
      },
      "event-time": {
        required: true
      },
      "nazov-udalosti": {
        required: true
      },
      "miesto-konania": {
        required: true
      },
      "popis-udalosti": {
        required: true
      }
    },
    messages: {
      "sport": {
        required: "Táto položka je povinná."
      },
      "pocet-osob": {
        required: "Táto položka je povinná."
      },
      "event-date": {
        required: "Táto položka je povinná."
      },
      "event-time": {
        required: "Táto položka je povinná."
      },
      "nazov-udalosti": {
        required: "Táto položka je povinná."
      },
      "miesto-konania": {
        required: "Táto položka je povinná."
      },
      "popis-udalosti": {
        required: "Táto položka je povinná."
      }
    },
    submitHandler: function(e) {
      var data = {
        sport         : $('[name="sport"]').val(),
        pocetOsob     : $('[name="pocet-osob"]').val(),
        eventDate     : $('[name="event-date"]').val(),
        eventTime     : $('[name="event-time"]').val(),
        nazovUdalosti : $('[name="nazov-udalosti"]').val(),
        miestoKonania : $('[name="miesto-konania"]').val(),
        popisUdalosti : $('[name="popis-udalosti"]').val()
      };

      console.log(data);
      var address = data.miestoKonania;

      getLocation(address);
      var lat = Session.get('address.lat');
      var lon = Session.get('address.lon');

      Meteor.call('addActivity', data, lat, lon, function(error, response) {
        if (error) {
          alert("Nepodarilo sa pridať udalosť.");
        } else {
          alert("Udalosť bola úspešne prijatá");
        }
      });

    }
  });
});

Template.addActivity.events({
  'submit #add-activity': function(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
  }
});
