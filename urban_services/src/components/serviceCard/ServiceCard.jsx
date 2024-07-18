import "./serviceCard.css";

export default function ServiceCard(props) {
  const { id, name, desc, picture } = props;
  console.log(id, name, desc, picture);
  return (
    <div class="card">
      <div class="card-image-container">
        <img src={picture} alt={name} />
      </div>
      <p class="card-title">{name}</p>
      <p class="card-des">{desc}</p>
    </div>
  );
}
