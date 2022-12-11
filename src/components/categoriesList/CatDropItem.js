import React from "react";
import { Link } from "react-router-dom";
const CatDropItem = (props) => {
  return (
    <ul>
      {props.fetchData.slice(0, 12).map((catitem, i) => {
        return (
          <li key={i}>
            <Link to={`/category/${catitem}`} href>
              {catitem}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CatDropItem;
