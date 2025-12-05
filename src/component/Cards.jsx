import { useState } from "react";

function Cards({ id, name, info, image, price }) {
  const [toggle, setToggle] = useState(false);
  const description = `${info.substring(0, 200)}`;
  // iska Matlab: string ke first 200 characters cut karke description me store honge.

  function readHandler() {
    setToggle(!toggle);
  }

  function removeTour(){

  }
  
  return (
    <div className="card">
      <img src={image} className="image" alt="image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span onClick={readHandler} className="read-more">
            {toggle ? " show less" : " ...show more"}
          </span>
        </div>
      </div>
      <button onClick={removeTour}>Not Interested</button>
    </div>
  );
}

export default Cards;
