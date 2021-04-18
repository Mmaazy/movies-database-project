import React, { Component } from 'react';
import '../assets/css/footer.css'
class Footer extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>

<div class="lastpage">
        
        <div>
        <img class="map" src='../../images/zapdasmap.jpg'/>
		</div>

		
		<img class="lh3" src='../../images/iconn.png'/>
		<img class="email" src='../../images/email.png'/>
		<img class="pin" src='../../images/pin.png'/>
		
		

		<div>
			<p class="number">0300-0078601</p>
			<p class="number1">021-4991460</p>
			<p class="emailid">Namvie.co@gmail.com</p>
			<p class="ad">Khayban-e-taufail,</p>
			<p class="ad1">Defence phase 7,</p>
			<p class="ad1">Karachi , Pakistan</p>
		</div>

		<div>
		<img class="logof1" src='../../images/f1.png'/>
		<img class="twiter" src='../../images/tt.png'/>
		<img class="snap" src='../../images/sc.png'/>
		</div>

		<div class="ft">
			<p>Copyright @ 2019 All right reserved by Namvie.co</p>
		</div>
</div>
            </React.Fragment>
          );
    }
}
 
export default Footer;