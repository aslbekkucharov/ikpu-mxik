import "./style.css";
import {
    MXIKSearch,
    MXIKSearchByCode,
    MXIKDetails,
    MXIKSearchBySubpositions,
} from "./lib";

// Usage example
const response = await MXIKSearch("футболка", { limit: 10, lang: "ru" });
console.log(response);

const res = await MXIKSearchByCode("06109001001000000", {
    limit: 20,
    lang: "ru",
});
console.log("res", res);

const details = await MXIKDetails("06109001001000000", { lang: "ru" });
console.log(details);

const subpositions = await MXIKSearchBySubpositions("футболка", {
    limit: 20,
    lang: "ru",
});
console.log("subposition", subpositions);

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `<h1>mxik</h1>`;
