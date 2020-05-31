import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  zoom: number = 10;
 
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  
  markers: marker[] = [
	  // {
		//   lat: 51.673858,
		//   lng: 7.815982,
		//   label: 'A',
		//   draggable: true
	  // },
	  // {
		//   lat: 51.373858,
		//   lng: 7.215982,
		//   label: 'B',
		//   draggable: false
	  // },
	  // {
		//   lat: 51.723858,
		//   lng: 7.895982,
		//   label: 'C',
		//   draggable: true
	  // }
        {

            lat: 51.447736,
            lng: -2.5837627,
            draggable: false
        },
        {
            
            lat: 51.4514358,
            lng: -1.0660875,
            draggable: false
        },
        {
            
           
            lat: 51.5268501,
            lng: -0.1362766,
            draggable: false
        },
        {
            
            lat: 49.5653619,
            lng: -2.6998818,
           draggable: false
        },
        {
           
            lat: 49.5653619,
            lng: -2.6998818,
             draggable: false
        }, 
         {
           
           lat: 51.3836304,
           lng: -2.715735,
           draggable: false
         },
         {
            
            lat: 51.5268501,
            lng: -0.1362766,
            draggable: false
        },
        {
        
            lat: 38.8748594,
            lng: 1.3690345,
             draggable: false
            
        },
        {
           
            lat:  38.8748594,
            lng:  1.3690345,
             draggable: false
        },
        {
                      
            lat: 55.8553807,
            lng: -4.3725409,
             draggable: false
        },
        {
           
            lat: 53.6520391,
            lng: -1.8577399,
             draggable: false
            
        },
        {
           
            lat: 54.2755481,
            lng: -0.4477916,
             draggable: false
        },
        {
            
            lat: 51.3836304,
            lng: -2.715735,
             draggable: false
        },
        {
           
            lat: 1.3264884,
            lng: 103.8318738,
            draggable: false
            
        },
        {
     
            
            lat: 1.3264884,
            lng: 103.831878,
            draggable: false
            
        },
        {
           
            lat: 39.3621496,
            lng: 1.6213068,
            draggable: false
        },
          {        
            lat: 39.3621496,
            lng: 1.6213068,
            draggable: false
           
        },
        {
            
            lat: 39.3621496,
            lng: 1.6213068,
           draggable: false
        },
        {
           
            lat: 39.3621496,
            lng: 1.6213068,
           draggable: false
        },
        {
  
            lat: 39.3621496,
            lng: 1.6213068,
            draggable: false
        },
        {
            
        
            
            lat: 48.8443038,
            lng: 2.3721886,
            draggable: false
        },
        {
            
            lat: 58.2038303,
            lng: 8.0815806,
            draggable: false
        },
        {        
            lat: 51.5268501,
            lng: -0.1362766,
            draggable: false
        },    
        {
                    
            lat: 51.5072906,
            lng: -0.0879923,
            draggable: false
        },
        {
          
         
            lat: 51.5348416,
            lng: -0.1343696,
            draggable: false
        },
        {
            lat: 52.477754,
            lng: -1.9011467,
             draggable: false
        },

         {
            lat: 51.1490437,
            lng: -0.185476,
            draggable: false
        },
        {
      
            lat: 38.8748594,
            lng: 1.3690345,
            draggable: false
        },
        {
            lat: 51.4952103,
            lng: -0.146086,
            draggable: false
        }, 

        {
            lat: 51.5348416,
            lng: -0.134369,
            draggable: false
        },
        {
      
            lat: 51.4991229,
            lng: -0.121108,
            draggable: false
        },
        {
            lat: 51.4991229,
            lng: -0.121108,
            draggable: false
        },
        {
          lat: 51.4991229,
          lng: -0.1211088,
          draggable: false  
        },
        {          
          lat: 25.0822595,
          lng: 55.11209,
          draggable: false 
        },
        {
          lat: 25.0822595,
          lng: 55.11209,
          draggable: false  
        },
         {
            
            lat: 25.2558953,
            lng: 55.2918579,
             draggable: false
        },
        {
            
            lat: 53.957981,
            lng: -1.0953797,
             draggable: false
        },
        {
          
            lat: 51.4952103,
            lng: -0.1460866,
            draggable: false
        },
        {
           
            lat: 51.5034078,
            lng: -0.1217202,
            draggable: false
             
        },

        {
          
            lat: 52.1988214,
            lng: 0.0499475,
            draggable: false
            
        },
        {
            
            lat: 52.5848502,
            lng: -0.440536,
            draggable: false
             
        },
        {
            
            lat: 31.192209,
            lng: 121.3321083,
             draggable: false
        },
        {
            
            lat: 31.192209,
            lng: 121.3321083,
             draggable: false
        },
        {
           
            lat: 31.192209,
            lng: 121.3321083,
             draggable: false
        },
       
        


  ]
   styles: any[] = [
 { featureType:'landscape.natural.landcover', elementType:"geometry",   stylers:[{color: '#0000FF'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
