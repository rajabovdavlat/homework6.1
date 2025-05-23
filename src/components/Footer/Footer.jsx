import "./Footer.css"

function Footer() {
    return(
        
        <div className="footer">
            
            <ul className="ul-1">
                <li>plantku</li>
                <li>Plantku House</li>
                <li>Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282</li>
            </ul>
            <ul className="ul-2">
                <li>Perusahaan</li>
                <li>Tentang Kami</li>
                <li>Hubungi Kami</li>
            </ul>
            <ul className="ul-3">
                <li>Produk</li>
                <li>Tanaman</li>
                <li>Tanaman Lain</li>
            </ul>
            <ul className="ul-4">
                <li>Berlangganan Email Kami</li>
                <li>
                    <input type="text" className="f-i" placeholder="Masukan Alamat Email" />
                </li>
                <li>
                    <button className="sub">Submit</button>
                </li>
            </ul>
        </div>
    )
}

export default Footer