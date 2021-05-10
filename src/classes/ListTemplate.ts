import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

// Generics

const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {
    ...obj,
    uid,
  };
};

let docOne = addUID({
  name: "Yh",
  age: 40,
});

console.log(docOne);

let arr = ["stuff", 25, true];

let tup: [string, number, boolean] = ["stuff", 25, true];

