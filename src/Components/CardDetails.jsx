import styles from "./CardDetails.module.css";
import { ShareAltOutlined, HeartOutlined } from '@ant-design/icons';

function CardDetails(){
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div style={{border: "1px solid rgba(0,47,52,.64)"}} className={styles.custom}>{"{img}"}</div>
                <div style={{textAlign: "left", border: "1px solid rgba(0,47,52,.64)"}}>
                    <div style={{fontWeight: "700", fontSize: "20px"}}>Details</div>
                    <div className={styles.spanCont}>
                        <span style={{color: "rgba(0,47,52,.64)"}}>Brand</span><span>{"{brand}"}</span><span style={{color: "rgba(0,47,52,.64)"}}>Model</span><span>{"{model}"}</span>
                        <span style={{color: "rgba(0,47,52,.64)"}}>Year</span><span>{"{year}"}</span><span style={{color: "rgba(0,47,52,.64)"}}>KM driven</span><span>{"{distance}"}</span>
                    </div>
                    <hr />
                    <div style={{fontWeight: "700", fontSize: "20px"}}>Description</div>
                    <div>{"{description}"}</div>
                </div>
            </div>
            <div className={styles.subContainer}>
                <div style={{border: "1px solid rgba(0,47,52,.64)"}}>
                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                    <div style={{flexBasis: "50%", textAlign: "left"}}> <h3>{"{price}"}</h3> </div>
                    <div style={{flexGrow: "1"}}></div>
                    <div style={{flexBasis: "8%"}}><ShareAltOutlined /></div>
                    <div style={{flexBasis: "8%"}}><HeartOutlined /></div>
                </div>
                <div style={{textAlign: "left"}}>{"{year}"} - {"{distance   }"}</div>
                <div className={styles.left_right}>
                    <div style={{color: "rgba(0,47,52,.64)", fontSize: "12px"}}>{"{address}"}</div>
                    <div></div>
                    <div style={{color: "rgba(0,47,52,.64)", fontSize: "12px"}}>{"{date}"}</div>
                </div>
                </div>
                <div style={{border: "1px solid rgba(0,47,52,.64)"}} className={styles.bold}>
                    Seller Description
                    <div style={{textAlign: "left"}}>{"{seller name}"}</div>
                    <button>Chat with seller</button>
                    <button>Make an offer</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;
