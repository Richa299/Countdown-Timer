import "./Card.css";
export default function Card({ data, active }) {
  return (
    <div className={`card ${active}`}>
      <hr />
      <p className="card-data">{data < 10 ? `0${data}` : data}</p>
    </div>
  );
}
