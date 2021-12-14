// ================================ Interfaces and Types =================================================

type Point = {
  x: number;
  y: number;
};

type D3Point = Point & {
  z: number
}

interface IPoint {
  x: number;
  y: number;
};

interface I3DPoint extends IPoint {
  z: number
}

type stringOrNumber = string | number;

const f = (point: IPoint) => {
  const a: I3DPoint = point as I3DPoint;
}

function printCoord(coor: Point) {}

interface ITest {
  a: number
}

interface ITest {
  b: number
}
