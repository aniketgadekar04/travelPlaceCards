import Cards from "./Cards";
function Tour({ tour, removeTour }) {
  return (
    <div className="container">
      <div className="text-center mb">
        <h2 className="title">Plan With ME !!</h2>
      </div>
      <div className="cards">
        {tour.map((a) => {
          return <Cards key={a.id} {...a} removeTour={removeTour}></Cards>;
        })}
      </div>
    </div>
  );
}

export default Tour;
