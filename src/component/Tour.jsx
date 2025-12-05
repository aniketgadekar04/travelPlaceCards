import Cards from "./Cards";
function Tour(props) {
  return (
    <div>
      <div>
        <h2>Plan With ME !!</h2>
      </div>
      <div>
        {props.tour.map((a) => {
          return <Cards {...a}></Cards>;
        })}
      </div>
    </div>
  );
}

export default Tour;
