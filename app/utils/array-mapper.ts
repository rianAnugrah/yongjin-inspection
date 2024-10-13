import { Children } from "react";

const ArrayMapper = ({ of, render }) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};


export default ArrayMapper