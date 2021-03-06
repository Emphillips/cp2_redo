import React from 'react';
// Import Styles
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// Import Google Map control - installed module
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';


function Map() {
  return (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: Number(`${lat}`), lng: Number(`${lng}`) }} 
  >
    <Marker
    key={birdeye}
    position={{ lat: Number(`${lat}`), lng: Number(`${lng}`) }}/>
  </GoogleMap>)
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const useStyles = makeStyles({
  root: {
    minWidth: "50%",
    maxWidth: "75%"

  },
  header: {
    fontSize: 25,
    textDecoration: "underline"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

var lat;
var lng;
var birdeye;

const Details = (props) => {
  const classes = useStyles();
  const id = props.match.params.id
  const place = props.place.find(c => c.id === Number(id))
  const detailview = props.detailview.find(c => c.id === Number(id))
  lat = detailview.lat;
  lng = detailview.lng;
  birdeye = detailview.id;
  return (
    
    <div className="detailCardContainer">
      <Card className={classes.root}>
        <div>
          <Typography className={classes.header}>{`${place.name}`}</Typography><br/>
          <Typography>{`${place.hours}`}</Typography><br/>
          <Typography>{`${place.address}`}</Typography><br/>
          <Typography>{`${detailview.details}`}</Typography><br/>
        </div>
        <div style={{width: '100%', height: '50vh'}}>
          <WrappedMap
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA_ru3F_aRvWek6L40K3adwGXgHwVkfIlg'}
            loadingElement={<div style={{height: '100%'}} />}
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}
            />
        </div>
      </Card>
    </div>

  )
};


export default Details;