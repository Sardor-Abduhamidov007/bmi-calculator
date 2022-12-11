let nameEl = document.getElementById("name");
let weightEl = document.getElementById("weight");
let heightEl = document.getElementById("height");
let msgEl = document.getElementById("title");
let formEl = document.getElementById("form-body");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameBro = nameEl.value;
  let name = nameBro.charAt(0).toUpperCase() + nameBro.slice(1).toLowerCase();
  let heightBro = heightEl.value;
  let height = heightBro / 100;
  let weight = weightEl.value * 1;
  let calc = (weight / height ** 2).toFixed(1) * 1;

  if (calc <= 18.5) {
    msgEl.textContent = `${name} you are thin person !`;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = "en-US";
    utter.text = `${name} you are thin person !`;
    utter.volume = 0.7;
    window.speechSynthesis.speak(utter);
  } else if (18.5 < calc && calc < 24.9) {
    msgEl.textContent = `${name} you are normal person !`;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = "en-US";
    utter.text = `${name} you are normal person !`;
    utter.volume = 0.7;
    window.speechSynthesis.speak(utter);
  } else if (25 < calc && calc < 29.9) {
    msgEl.textContent = `${name} you are fat person !`;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = "en-US";
    utter.text = `${name} you are fat person !`;
    utter.volume = 0.7;
    window.speechSynthesis.speak(utter);
  } else if (30 < calc && calc < 6534851276943846) {
    msgEl.textContent = `${name} you are very fat person !`;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = "en-US";
    utter.text = `${name} you are very fat person !`;
    utter.volume = 0.7;
    window.speechSynthesis.speak(utter);
  } else {
    msgEl.textContent = `Please fill in the blanks !`
    let utter = new SpeechSynthesisUtterance();
    utter.lang = "en-US";
    utter.text = `Please fill in the blanks !`;
    utter.volume = 0.7;
    window.speechSynthesis.speak(utter);
  }

  nameEl.value = "";
  heightEl.value = "";
  weightEl.value = "";
});
