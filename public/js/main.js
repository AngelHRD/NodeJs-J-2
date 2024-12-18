// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
//-                                                              -//
//-              CE fichier EST du js PAS du nodejs              -//
//-                                                              -//
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
"use strict";

document.querySelectorAll("form").forEach((form) => {
  const controls = form.querySelectorAll(".form-control, textarea, select, button");

  controls.forEach((control) => {
    const parent = control.parentNode;
    const label = parent.querySelector("label");

    if (control.required) {
      label.classList.add("required");
    }
  });
});
