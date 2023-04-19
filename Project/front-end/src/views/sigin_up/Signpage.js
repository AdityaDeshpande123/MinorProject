import Auth from "./Auth"
import bgimg from '../../static/signbg2.jpg'
function Signpage() {
    document.body.style.backgroundImage=`url(${bgimg})`;
    document.body.style.backgroundSize = "100% 100%";
  return (
    <div>
    <Auth></Auth>
    </div>
  )
}

export default Signpage