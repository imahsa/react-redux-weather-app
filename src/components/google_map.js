import React , {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //Ref system in react, allows to get refrence
    //to a HTML element than has been rendered to the page
    //this.refs.map: we can use anywhere we want
    //Because we give this element the ref="map"
    return <div ref="map" />
  }
}

export default GoogleMap;
