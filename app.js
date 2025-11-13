const questions = [
"Kann ich heute ohne Druck vorausdenken?",
"Fühle ich Optionen statt 'ich muss'?",
"Denke ich in Lösungen, nicht in Bedrohungen?",
"Habe ich Zugang zu meiner eigenen Meinung?",
"Habe ich heute mindestens EINEN selbstständigen Gedanken gehabt?",
"Atme ich natürlich oder flach?",
"Ist mein Brustkorb offen oder eng?",
"Fühlt sich mein Kopf klar oder wattig an?",
"Habe ich heute wenigstens einen Moment Ruhe gespürt?",
"Muss ich gegen innere Unruhe ankämpfen?",
"Gehören meine heutigen Gefühle eindeutig mir?",
"Wurde mein Zustand heute durch mich bestimmt – oder durch Außen?",
"Habe ich heute nach Kontakt zu mir selbst gesucht?",
"Habe ich meine Grenzen gespürt und benennen können?",
"Fühlt sich mein innerer Raum weit oder eng an?",
"Kann ich heute Ereignisse objektiv einordnen?",
"Verwechsele ich heute Vergangenheit nicht mit Jetzt?",
"Sehe ich die Dinge ohne Überinterpretation?",
"Habe ich heute keine Katastrophenbilder im Kopf?",
"Bin ich in der Lage, Komplexität auszuhalten?",
"Habe ich heute etwas entschieden, das mich betrifft?",
"Habe ich heute für mich gehandelt?",
"Habe ich eine Kleinigkeit erledigt, die meinem Leben dient?",
"Habe ich heute meine Zeit beeinflusst?",
"Fühle ich mich heute wirksam statt ausgeliefert?"
];

const qDiv = document.getElementById("questions");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `
    <strong>${i+1}. ${q}</strong><br>
    <label><input type="radio" name="q${i}" value="1"> JA</label>
    <label><input type="radio" name="q${i}" value="0.5"> TEILWEISE</label>
    <label><input type="radio" name="q${i}" value="0"> NEIN</label>
  `;
  qDiv.appendChild(div);
});

document.getElementById("evaluate").addEventListener("click", () => {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const val = document.querySelector(`input[name='q${i}']:checked`);
    if (val) score += parseFloat(val.value);
  }
  const result = document.getElementById("result");
  if (score >= 18) result.textContent = "🟢 Freies Denken aktiv (" + score + ")";
  else if (score >= 12) result.textContent = "🟡 Teils frei (" + score + ")";
  else if (score >= 6) result.textContent = "🟠 Verengt (" + score + ")";
  else result.textContent = "🔴 Überlebensmodus (" + score + ")";
});
