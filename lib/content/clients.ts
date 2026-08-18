export type Client = {
  name: string;
  logo: string;
  width: number;
  height: number;
  scale?: number;
};

export const CLIENTS: Client[] = [
  {
    name: "Charlotte.G",
    logo: "/images/clients/client-charlotte-g.png",
    width: 466,
    height: 123,
  },
  {
    name: "Pseaume Couverture",
    logo: "/images/clients/client-pseaume-couverture.png",
    width: 695,
    height: 523,
  },
  {
    name: "LMA · Libre de manger autrement",
    logo: "/images/clients/client-lma.png",
    width: 262,
    height: 313,
    scale: 1.35,
  },
  {
    name: "CrossFit Genum",
    logo: "/images/clients/client-crossfit-genum.png",
    width: 1730,
    height: 762,
  },
  {
    name: "Ma.né",
    logo: "/images/clients/client-mane.png",
    width: 1572,
    height: 1572,
  },
  {
    name: "Genum Series",
    logo: "/images/clients/client-genum-series.png",
    width: 82,
    height: 49,
  },
  {
    name: "Institut N.G.",
    logo: "/images/clients/client-institut-ng.png",
    width: 1324,
    height: 504,
  },
  {
    name: "AGiR",
    logo: "/images/clients/client-agir.png",
    width: 1024,
    height: 1024,
  },
  {
    name: "RCBB · Rugby Club Bon-Encontre Boé",
    logo: "/images/clients/client-rcbb.png",
    width: 294,
    height: 316,
  },
];
