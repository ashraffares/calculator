import Button from '../button/button';

const ButtonPanel = () => (
  <div>
    <input type="text" disabled />
    <div>
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div>
      <Button name="3" />
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
    </div>
    <div>
      <Button name="+" />
      <Button name="-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div>
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
