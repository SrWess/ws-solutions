import "./style.scss";

export default function Input({ title, nameInput }) {
  return (
    <div className="field">
      <label>
        <p>{ title }</p>
        <input type="text" name={nameInput} id={nameInput} />
      </label>
    </div>
  );
}
