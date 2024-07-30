import "./serviceCard.css";
import { useNavigate } from "react-router-dom";


export default function ServiceCard(props) {
  const { id, name, desc, picture,price } = props;
  console.log(id, name, desc, picture);
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking', {
      state: {
        utility_id: id,
        utility_name: name,
        utility_price: price,
        utility_picture: picture
      }
    });
  };
  return (
    <div class="card">
      <div class="card-image-container">
        <img src={picture} alt={name} />
      </div>
      <p class="card-title">{name}</p>
      <p class="card-des">{desc}</p>
      <button className="book-button" onClick={handleBooking}>
        Book
      </button>
    </div>
  );
}
