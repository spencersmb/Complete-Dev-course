import react from 'react';
const React = react;

// Import Components
import WeatherForm from 'WeatherForm';
import WeatherResult from 'WeatherResult';
import OpenWeatherMap from 'OpenWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      city: '',
      temp: '',
      error:null
    };

    this.getWeather = this.getWeather.bind(this);

  }
  componentDidMount(){
    // first time its mounted to the browser run code

    // get params from router
    var location = this.props.location.query.location;

    // check for value
    if(location && location.length > 0){
      this.getWeather(location);
      //after Search reset url
      window.location.hash = '#/';
    }

  }
  componentWillReceiveProps(newProps){
    // When props change after submitting a new url change from the search nav
    // this component knows that props chagned on the url, we save that in a variable
    // then refresh the component lifecycle by passing the new prop into the getweather function
    // and it will reset everything with the new data

    // get params from router
    var location = newProps.location.query.location;

    // check for value
    if(location && location.length > 0){
      this.getWeather(location);
      //after Search reset url
      window.location.hash = '#/';
    }
  }

  getWeather( city ) {
    let that = this;

    //clear data
    this.setState({
      isLoading:true,
      error:null,
      city: '',
      temp: ''
    });

    // call the http fetch - and then resolve it using then
    OpenWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        isLoading: false,
        city: city,
        temp: temp
      });
    }, function (err) {
      that.setState({
        isLoading: false,
        city: '',
        temp: '',
        error: 'No city found'
      });
      console.log(err);
    });

  }

  render() {
    let {isLoading, temp, city, error} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h4 className="text-center page-title">Loading...</h4>;
      }else if(temp && city){
        return  <WeatherResult temp={temp} city={city}/>;
      }
    }

    function errorMessage(){
      if(error != null){
        return <ErrorModal errorMessage={error} close=""/>
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm getWeather={this.getWeather}/>
        {renderMessage()}
        {errorMessage()}
      </div>
    );
  }
}

module.exports = Weather;