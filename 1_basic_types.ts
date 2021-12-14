// const a: number = 5;

let a: number = 4;
let b = "sdfsdf";
let c = true;

let d: string[] = ["dfs", "sdfasda"];

let e: any = 3;
e = "sefs";

function test(a: string): number | string {
  return "";
}

const test2 = (a: number): void => {
  return;
};

d = d.map((x: string) => x.toLowerCase());

function countCoord(coord: { lat: number; long?: number }) {}

function printIt(id: number | string) {
  if (typeof id === "number") {
    console.log(id.toString());
  } else if (typeof id === "string") {
    id.toUpperCase();
  }
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {

  }
}
