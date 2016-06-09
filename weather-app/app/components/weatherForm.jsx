import react from 'react';
const React = react;

class WeatherForm extends React.Component {

  constructor(){
    super();
    this.submitWeather = this.submitWeather.bind(this);
  }

  submitWeather(e){
    e.preventDefault();
    let location = this.refs.city.value;

    if(location.length > 0 ) {
      this.refs.city.value = '';
      this.props.getWeather(location);
    }
  }
  render() {
    return (
      <form onSubmit={this.submitWeather}>
        <input type="text" ref="city" placeholder="Search..."/>
        <button type="submit" className="button expanded hollow">Submit</button>
      </form>
    );
  }
}
module.exports = WeatherForm;
