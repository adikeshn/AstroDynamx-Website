import "../styleSheets/person.css";

function Person({ name, uri, desc }) {
  return (
    <div className="person-div">
      <img src={"src/assets/daddydonald.jpg"} className="profile-img" />
      <span className="name-text">{name}</span>
      <div className="desc-text">{desc}</div>
    </div>
  );
}

export default Person;
