import Cards from "./Cards";
function Tour({tour, removeTour}) {
  return (
    <div>
      <div>
        <h2>Plan With ME !!</h2>
      </div>
      <div>
        {tour.map((a) => {
          return <Cards {...a} removeTour={removeTour}></Cards>;
        })}
      </div>
    </div>
  );
}

export default Tour;
