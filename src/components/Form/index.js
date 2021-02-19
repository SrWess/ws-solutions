import Input from "../Input";
import Select from "../Select";

import "./styles.scss";

export default function Form() {
  const optionsContact = [
    { value: "", label: "" },
    { value: "MK Bot", label: "MK Bot" },
    { value: "Telefone", label: "Telefone" },
  ];

  const optionsProtocol = [
    { value: "", label: "" },
    { value: "Sim", label: "Sim" },
    { value: "Nao", label: "Não" },
  ];

  const optionsSystem = [
    { value: "", label: "" },
    { value: "UNM2000", label: "UNM2000" },
    { value: "U2000", label: "U2000" },
  ];

  const optionsOlt = [
    { value: "", label: "" },
    { value: "Matriz", label: "Matriz" },
    { value: "Gaivotas", label: "Gaivotas" },
    { value: "Centro", label: "Centro" },
    { value: "Savoy", label: "Savoy" },
    { value: "Umuarama", label: "Umuarama" },
  ];

  const optionsOnu = [
    { value: "", label: "" },
    { value: "FiberHome", label: "FiberHome" },
    { value: "Huawei", label: "Huawei" },
    { value: "Huawei Integrado", label: "Huawei Integrado" },
  ];

  const optionsStatus = [
    { value: "", label: "" },
    { value: "Ativo", label: "Ativo" },
    { value: "Inativo", label: "Inativo" },
  ];

  return (
    <form>
      <h1>Triagem</h1>

      <fieldset>
        <div className="field-group">
          <Select
            title="Meio de Contato"
            nameSelect="methodContact"
            optionsValues={optionsContact}
          />

          <Input title="Nome" nameInput="name" />
          <Input title="Telefone" nameInput="tel" />

          <Select
            title="Protocolo"
            nameSelect="protocol"
            optionsValues={optionsProtocol}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="field-group">
          <Select
            title="Sistema"
            nameSelect="system"
            optionsValues={optionsSystem}
          />

          <Select title="OLT" nameSelect="olt" optionsValues={optionsOlt} />

          <Select title="ONU/ONT" nameSelect="onu" optionsValues={optionsOnu} />

          <Select
            title="Status ONU/OLT"
            nameSelect="statusonu"
            optionsValues={optionsStatus}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="field-group">
          <div className="field-alarms">
            <label>Alarme(s) constatado(s)</label>

            <div className="list-alarms">
              <div className="item-alarm">
                <input
                  type="checkbox"
                  id="dying-gasp"
                  name="dying-gasp"
                  value="codificação"
                />
                <label for="dying-gasp"> DYING_GASP </label>
              </div>

              <div className="item-alarm">
                <input
                  type="checkbox"
                  id="link-loss"
                  name="link-loss"
                  value="codificação"
                />
                <label for="link-loss"> LINK_LOSS </label>
              </div>

              <div className="item-alarm">
                <input
                  type="checkbox"
                  id="sdsuf"
                  name="sdsuf"
                  value="codificação"
                />
                <label for="sdsuf"> SD / SUF </label>
              </div>

              <div className="item-alarm">
                <input
                  type="checkbox"
                  id="downbip"
                  name="downbip"
                  value="codificação"
                />
                <label for="downbip"> DOWN_BIP </label>
              </div>

              <div className="item-alarm">
                <input
                  type="checkbox"
                  id="upbip"
                  name="upbip"
                  value="codificação"
                />
                <label for="upbip"> UP_BIP </label>
              </div>
            </div>
          </div>

          <div className="field-group-timeDate">
            <div className="field">
              <label for="dateAlarm">Data</label>
              <input id="dateAlarm" type="date" name="dateAlarm" />
            </div>
            <div className="field">
              <label for="timeAlarm">Horário</label>
              <input id="timeAlarm" type="time" name="date" />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
