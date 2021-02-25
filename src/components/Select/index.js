export default function Input({ title, nameInput, optionsValues }) {

  return (
    <div className="field">
    <label>
      <p>{ title }</p>
      <select name={ nameInput } id={ nameInput }>
        { optionsValues.map((option) => {
          return <option key={ option.value } value={ option.value }>{ option.label }</option>
        }) }
      </select>
    </label>
  </div>
  );
}
