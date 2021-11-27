import React from "react";
import ReactDOM from "react-dom";
const user = {
  firstName: "Dungle",
  lastName: "Deng",
};
function formatName(params) {
  return user.firstName + "." + user.lastName + "!";
}



function WelCome(props) {
  return <h1>Hello,{formatName(user)}</h1>;
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div>
        <WelCome></WelCome>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water will boil.</p>
  }
  return <p>The water would not boil;</p>
}
class Calculater extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahreneitChange = this.handleFahreneitChange.bind(this);
    this.state = { temperature: '', scale: 'c' }
  }
  handleCelsiusChange(temperature) {
    this.setState({ temperature, scale: 'c' })
  }
  handleFahreneitChange(temperature) {
    this.setState({ temperature, scale: 'f' })
  }
  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}></TemperatureInput>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahreneitChange}></TemperatureInput>
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
      </div>
    )
  }
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahreneit'
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange}></input>

      </fieldset>
    )
  }
}

ReactDOM.render(<div><Clock></Clock><Calculater></Calculater></div>, document.getElementById("root"));
