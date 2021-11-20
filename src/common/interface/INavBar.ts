import ISubNavBar from "./ISubNavBar";

export default interface INavBar {
  id: number;
  name: string;
  path: string;
  subNavBar: ISubNavBar[] | []
}