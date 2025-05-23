import "./Plants.css"

function Plants() {
    return(
        <div>
            <div className="p-nav">
                <h2>Featured Plants</h2>
                <select className="p-slc">
                    <option>Cheaper First</option>
                    <option>Expensive First</option>
                </select>
            </div>
            <div className="flowers">
                <div className="flower">
                    <img src="/img1.png" alt="" />
                    <h2>Kaktus Plants</h2>     
                    <h3>IDR 85.000</h3> 
                </div>
                <div className="flower">
                    <img src="/img2.png" alt="" />
                    <h2>Kaktus Plants</h2>     
                    <h3>IDR 85.000</h3> 
                </div>
                <div className="flower">
                    <img src="/img3.png" alt="" />
                    <h2>Kaktus Plants</h2>     
                    <h3>IDR 85.000</h3> 
                </div>
                <div className="flower">
                    <img src="/img4.png" alt="" />
                    <h2>Kaktus Plants</h2>     
                    <h3>IDR 85.000</h3> 
                </div>
                <div className="flower">
                    <img src="/img5.png" alt="" />
                    <h2>Kaktus Plants</h2>     
                    <h3>IDR 85.000</h3> 
                </div>
            </div>
        </div>
    )
}

export default Plants