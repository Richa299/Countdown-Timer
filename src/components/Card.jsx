import "./Card.css";
export default function Card({ data, active }) {
  return (
    <>
      <div
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "10px",
          backgroundColor: "hsl(236, 21%, 26%)",
          position: "relative",
        }}
        className={`card ${active}`}
      >
        <hr />
        <p
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: "80px",
            color: "red",
          }}
          className="card-back"
        >
          {data}
        </p>
      </div>
    </>
  );
}
