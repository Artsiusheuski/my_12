export default function Cart(props) {
  return (
    <tr>
      <td className="addImg">
        {props.title} <img src={props.img} alt="name" />
      </td>
      <td>{props.cost}</td>
      <td>{props.amount}</td>
      <td>{props.cost * props.amount}</td>
      <td className="button-d button" as={props.articul}>
        Delete
      </td>
      <td className="button-m button" as={props.articul}>
        Minus
      </td>
    </tr>
  );
}
