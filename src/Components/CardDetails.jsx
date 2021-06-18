import styles from "./CardDetails.module.css";
import { ShareAltOutlined, HeartOutlined } from '@ant-design/icons';
import avatar from "../Assets/avatar.png"
import {Link} from "react-router-dom"

function CardDetails({image, brand, year, model, distance, price, address, postDate, description, sellerName, memeberSince, fuel, totalOwners}){
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div style={{border: "1px solid #CCD5D6"}} className={styles.custom}>
                    <img src = {image} alt = "content" />
                </div>
                <div style={{textAlign: "left", border: "1px solid #CCD5D6"}}>
                    <div style={{fontWeight: "700", fontSize: "20px", color: "#002f342", marginBottom: "2%"}}>Details</div>
                    <div className={styles.spanCont}>
                        <span style={{color: "rgba(0,47,52,.64)", marginBottom: "2%"}}>Brand</span><span style = {{color: "#002F34"}}>{brand}</span>
                        <span style={{color: "rgba(0,47,52,.64)"}}>Model</span><span style = {{color: "#002F34"}}>{model}</span>
                        <span style={{color: "rgba(0,47,52,.64)"}}>Year</span><span style = {{color: "#002F34"}}>{year}</span>
                        <span style={{color: "rgba(0,47,52,.64)", marginBottom: "2%"}}>KM driven</span><span style = {{color: "#002F34"}}>{distance} km</span>
                        <span style={{color: "rgba(0,47,52,.64)"}}>No. of Owners</span><span style = {{color: "#002F34"}}>{totalOwners}</span>
                    </div>
                    <hr />
                    <div style={{fontWeight: "700", fontSize: "20px", color: "#002f34", marginBottom: "2%", marginTop: "2%"}}>Description</div>
                    <div style = {{color: "#002F34"}}>{description}</div>
                    
                </div>
            </div>
            <div className={styles.subContainer}>
                <div style={{border: "1px solid #CCD5D6"}}>
                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",marginLeft: "2%"}}>
                    <div style={{flexBasis: "50%", textAlign: "left", color: "#002F34"}}> <h1> ₹ {price}</h1> </div>
                    <div style={{flexGrow: "1"}}></div>
                    <div className={styles.hover} style={{flexBasis: "8%"}}><ShareAltOutlined /></div>
                    <div className={styles.hover} style={{flexBasis: "8%"}}><HeartOutlined /></div>
                </div>
                <div style={{textAlign: "left", marginLeft: "2%", color: "rgba(0,47,52,.64)"}}>{year} - {distance} km</div>
                <div style = {{marginLeft: "2%", color: "rgba(0,47,52,.64)"}}> <h3>{brand} {model}, {year} {fuel}</h3>  </div>
                
                <div className={styles.left_right}>
                    <div style={{color: "rgba(0,47,52,.64)", fontSize: "12px",marginLeft: "2%"}}>{address}</div>
                    <div></div>
                    <div style={{color: "rgba(0,47,52,.64)", fontSize: "12px"}}>{postDate}</div>
                </div>
                </div>
                <div style={{border: "1px solid #CCD5D6"}} className={styles.bold}>
                    <p style = {{marginLeft: "2%", color: "#002F34"}}>Seller Description</p>
                    <div style = {{display: "flex"}}>
                        <div>
                            <img src= {avatar} alt="" style = {{height: "70px", width: "70px"}} />
                        </div>
                            <h4 style={{textAlign: "left", marginLeft: "3%", marginRight: "3%", color: "#002F34"}}>{sellerName}</h4>
                            <h6 style = {{color: "rgba(0,47,52,.64)"}}>Member since {memeberSince}</h6>
                        <div>

                        </div>
                    </div>
                    <Link to = {`/chat?name=Buyer&room=OLX`}><button style = {{cursor: "pointer"}}>Chat with seller</button></Link>
                    <button>Make an offer</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;
