// Riverbend class finder + form help

// Why a list: the buttons and the welcome back message need the same three sentences
const classOptions = [
  "Gentle Yoga fits you: slow moves, chair options, Mondays and Thursdays at 9 AM.",
  "Vinyasa Flow fits you: breath-linked moves that build strength, Monday and Friday evenings.",
  "Restorative Yoga fits you: blankets and bolsters for rest and better sleep, Wednesdays and Saturdays."
];

// Show one class option by number 0, 1, or 2
function showClass(index) {
  const box = document.getElementById("class-result");
  if (!box) {
    return;
  }
  // Why textContent: it puts plain words on the page with no HTML
  box.textContent = classOptions[index];
}

// Why try and catch: some browsers block storage, the page must not break
function savePick(index) {
  try{

  localStorage.setItem("riverbend-class", String(index));
  }catch (error) {
  return;
  }
  const note = document.getElementById("saved-pick");
  if (note) {
    note.textContent = "Saved. Next visit I will remember this pick.";
 }
}

// Each finder button shows its class and saves the number
const btnGentle = document.getElementById("btn-gentle");
if (btnGentle) {
  btnGentle.addEventListener("click", function() {
    showClass(0);
    savePick(0);
  });

}

const btnVinyasa = document.getElementById("btn-vinyasa");
if (btnVinyasa) {
  btnVinyasa.addEventListener("click", function() {
    showClass(1);
    savePick(1);
    });
}

const btnRestorative = document.getElementById("btn-restorative");
if (btnRestorative) {
  btnRestorative.addEventListener("click", function() {
    showClass(2);
    savePick(2);
  });
}

// On page open, welcome back a visitor who saved a pick
function loadPick() {
  const box = document.getElementById("class-result");
  const note = document.getElementById("saved-pick");
  if (box && note) {
    const saved = localStorage.getItem("riverbend-class");
    // Why three if blocks: stored values come back as text, so check "0" "1" "2"
    if (saved === "0") {
      box.textContent = "Welcome back. Your saved pick: " + classOptions[0];
      note.textContent = "This was your last pick";
    } 
    if (saved === "1") {
      box.textContent = "Welcome back. Your saved pick: " + classOptions[1];
      note.textContent = "This was your last pick";
    }
    if (saved === "2") {
      box.textContent = "Welcome back. Your saved pick: " + classOptions[2];
      note.textContent = "This was your last pick";
    }
  }
}

loadPick();

// On the events page open, fill the name box if we saved one before
function prefillName() {
  const nameBox = document.getElementById("name");
  if (!nameBox) {
    return;
  }
  const savedName = localStorage.getItem("riverbend-name");
  // Why the empty check: never overwrite what the visitor already typed
  if (savedName && nameBox.value === "") {
    nameBox.value = savedName;
  }
}

prefillName();

// Only the events page has a form, so check first
if (form) {
  form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const note = document.getElementById("form-note");
  let ok = true;

  // Why clear first: old warnings must not stay up on a good try
  if (nameError) {
    nameError.textContent ="";
  }
  if(emailError) {
    emailError.textContent ="";
  }
  if (note) {
    note.textContent ="";
  }

  // Name needs at least 2 letters, same rule as the minlength in the HTML
  if (!nameInput || nameInput.value.trim().length <2) {
  if (nameError) {
      nameError.textContent = "Please enter your full name.";
    }
    ok = false;
  }

  // Why check for @: the HTML type=email missed it, so JS says it again
  if(!emailInput || emailInput.value.indexOf("@") === -1) {
    if(emailError) {
     emailError.textContent = "Please enter an email with @.";
      }
      ok = false;
    }

    // Why 10: gives enough to reply to
    if (!messageInput || messageInput.value.trim().length < 10) {
      if (note) {
        note.textContent = "Please write at least 10 characters.";
      }
      ok = false;
    }
    
    // Why stop the send: nothing leaves the page while a box is empty
    if (!ok) {
    event.preventDefault();
    return;
    }
    try {
      // Only reached when every check passed, so save the name for next visit
      localStorage.setItem("riverbend-name", nameInput.value.trim());
    } catch (error) {
      return;
    }
    if (note) {
      note.textContent = "Thanks. I saved your name for next time.";
    }
  });
}
