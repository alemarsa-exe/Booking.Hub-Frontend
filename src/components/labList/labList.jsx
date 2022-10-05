import "./labList.css"

const LabList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://www.hochschule-rhein-waal.de/sites/default/files/styles/hrw_page/public/images/2018/06/26/iot_labor_slide.jpg?itok=SU4_c36b" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>IoT</h1>
                    <h3>Hub de Ciberseguridad</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://libraries.indiana.edu/sites/default/files/media/images/6-Seat-Option-in-the-SPEA.jpg" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Sala de estudio</h1>
                    {/* https://www.hp.com/mx-es/shop/all-in-one-hp-pavilion-24-ca0000la-58r02la.html*/}
                    <h3>Hub de Ciberseguridad</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.icgconstruction.com/sites/www.icgconstruction.com/files/assets/1484_06.jpg" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Sala de Conferencia</h1>
                    <h3>Hub de Ciberseguridad</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.nbranded.com/wp-content/uploads/2018/09/domustea2.jpg" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Pitch Room</h1>
                    <h3>Hub de Ciberseguridad</h3>
                    {/*https://www.hp.com/us-en/shop/pdp/hp-all-in-one-22-df0120m */}
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.red-thread.com/wp-content/uploads/sites/779/2021/07/22.jpg" alt="" className="pListImage" />
                <div className="pListTitles">
                    <h1>Sala de negocios</h1>
                    <h3>Hub de Ciberseguridad</h3>
                    {/* https://www.dell.com/en-in/work/shop/business-pcs-desktop-computers/sf/optiplex-desktops*/}
                </div>
            </div>
        </div>
    )
}


export default LabList