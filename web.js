import { Nop } from "./Nop.js";

const scrs = document.querySelectorAll(`script[type="text/nop"]`);
for (const scr of scrs) {
  const src = scr.textContent;
  const runtime = new Nop(src, (s) => {
    alert(s);
  });
  runtime.run();
}
