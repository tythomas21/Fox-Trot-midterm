$(function () {
  console.log("ready!");

  // loads data into DevSkills card
  $.each(skillData, function (key, item) {
    $("#stuff-lists").append(`<h4> ${key} </h4> <dl id="${key}-list">`);
    $.each(item, function (index, val) {
      // $(`#${key}-list`).append(val.propertyName);
        $.each(val, function (propertyName, propertyValue) {
        console.log(propertyName, propertyValue);
        //$(`#${key}-list`).append(`<li>`);
          $(`#${key}-list`).append(`${propertyValue}`);
        //${val.showName} / ${val.venu/e}`);
      });
    });
  });

  // loads data into interest/hobbies card
  $.each(interestData, function (key, item) {
    $("#stuff-lists").append(`<h4> ${key} </h4> <dl id="${key}-list">`);
    $.each(item, function (index, val) {
      // $(`#${key}-list`).append(val.propertyName);
        $.each(val, function (propertyName, propertyValue) {
        console.log(propertyName, propertyValue);
        //$(`#${key}-list`).append(`<li>`);
          $(`#${key}-list`).append(`${propertyValue}`);
        //${val.showName} / ${val.venu/e}`);
      });
    });
  });

});


const skillData = {
  skills: [
    { skillName: `<dt>Python</dt>`, description: `<dd>2 intro classes</dd>` },
    { skillName: `<dt>HTML`, description: `<dd>~1 Semester, no projects done yet.<dd>` },
    { skillName: `<dt>jQuery`, description: `<dd>One semester.` },
    { skillName: `<dt>CSS`, description:`<dd> One Semester`},
  ],
};

const interestData = {
  interests: [
    { interestName: `<dt>Music (artists)</dt>`, description: `<dd>JuiceWrld, OliverTree, JID, Frank Ocean, Tyler the Creator, Steve Lacey, The Kid Laroi` },
    { interestName: `<dt>Videogames (Titles/Series)`, description: `<dd>Pokemon, borderlands, Madden, Fortnite, and some varius phone games.
     Hobo: froza, Besiege, CoD , Doom (Old & New),` },
    { interestName: `<dt>Shows/YT Series`, description: `<dd>You, The new Dhamer series, One Piece, Bleach, & "Love, Death and Robots",` },
    { interestName: `<dt>Fishing/Anime`, description:`<dd> Bassfishing, Catfishing, anything manga related`  },
  ],
};