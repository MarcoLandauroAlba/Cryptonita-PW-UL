const Nosotros = () =>{
    return(<div className='row'>
            
    <h2>Nosotros</h2>
    <div className='col-md-8 mt-4'>
        <ul>
            <li>Mauricio Alejandro Aguirre Izaguirre <br/>  
                {/*<img src='https://lh3.googleusercontent.com/rXSbudIJbRaVac-sdgmqs5_xp2DLhxVcC-LJz6a3QAaMElGaVnvzVcwkWe8NzW-QrvFsXfq_Q7G6xTkb1eItkIUIIHC5I-Cp2vY2L9Q1rdx4Taoz_F-_dNMBGW7UvJ8Fw4dSQm7rgz5VQ1EAw-ZUwZ7iFkfuzBMDnUBrHpy4lJGo7U37PKE8BJmPxT2saYGk-xVtico5JQVAP5-Xqb31V3EHDNl3TF5KHJmohlEgLeHT9hVVuYoAQMPKV9xrOltLpVYxjfan2Eb0Ugss10qrmt2_fNN5__BbVjChPMuOEe2VQfuN47oau-vixZlLcNC6y0Lz-zsyftTZjbuq60BKL-q2Id5Aq91u6hPa11MCK2vCxvSaN1jSD28HoJX0IoJIJWFbtTQJL9wFWZ97j3oWLEHqVz9Gz5j46pKLG5CGTNfzDuID2uorvSx8BGNqFCQSsmqYIS_55e2HzLIpIHCgBstGesBCSrD66UwbC28tActHBpwUxobtqGIB_B61FVt-TcJ18P-vT6pzi5734CV2B8bz9yTLYRFlpwjeToC4AaRrPgVdmwFQ-A1CttsBihoFT3upcZo5VCCSahHbyQXvABQBeZdmB00Se1caa_gRcmH8ZAbNL6urdofptOR8aoYloi_uMsqS6ffuBGTxKQ05m73K32JOLR8yZfi9yJLQio3R4izrlN6dwfOiLV4Bi6RjIq3Q2047peKXSkN3GsFVUIQ=s720-no?authuser=0' width={150}></img>*/}
                <img src="https://i.pinimg.com/236x/32/28/d3/3228d36a72d1dd13a7580e34949d8185.jpg" width={150}></img>
            </li>
            <li>Sergio David Flores Tavara <br/>
                {/*<img src="https://lh3.googleusercontent.com/v7pr-YTjEDomYFup8GOOrts0MUcYZBb_Whc7SPCbKi_gGI1UoVO9Jsw8CblTUwR3cmw81GxhOSJiWl8hYvik-fAVUvnlLJLFU9sqaJIRHaKswN0saQKhVaefeKNEA_G2u-CsbU_1ZdYvf33R-J5zLRNKKF83X4Pv_dnd3GZNsdUc3X2ZzSiYjuGt_Eu68w0IuJ2mtBzY022Z5vsd8foxSuBnbzL9x8PDLJ-oaP9zNR-4LaMqo29mKK-S5sYDjvQB9pK6xAQcIFiWldPPn1g3vme_lSiWVKy1hR-TECUiPznROtdmQHpo4QW4y1RX7qyp0v-iRcEWO7IjRswEES4TlUKnjMuFpMJaB9WDYnGzhja36-Ja90AkfvP7fD4ytg_HH1srufkAGcduoEhgFmhbs0jyq-NJmvtD2XS499KfKcsCpnG1hdnB2Wkb3Zd3yzvzJVykISbjSeU69FHrm6V0cbBrBJcLBaLiwdf5-xrTK8ISR8cepu6Db0xXPcE0N5E_LyBt78MEHUZHJNJVekovdtw7faWY5mFoqfngXRI6O_KPvoEQJQO-kAkOmw7NCwxh-a3FziJsATTG5aMBsysECqMbFZcJth5h1tuGoWGLNt_Zox2OWCBhBMgsh1jdjz40VlNmKmIQByDpB4aBX0ijn4ANB5VflQWktAvYFdwWnlzcXBUh-kkV1eFoADXfqphpVtwmX9_K9kpVXNNf-7L7JeY=s328-no?authuser=0" width={150}></img>*/}
                <img src="/images/WhatsApp_Image_2022-02-17_at_2.52.22_PM.jpeg" width={150}></img>
            </li>
            <li>Marco Antonio Landauro Alba <br/>
                <img src="https://scontent.flim16-2.fna.fbcdn.net/v/t31.18172-8/23270526_136620217096953_391130970073795505_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeETf0K1o3JSphSMXMJzSPHRNggPPGwsXcs2CA88bCxdy-nXUf7o54TyZQZ112PS-qkq927kYkNx55ldc_SA7D-l&_nc_ohc=d_Ibt48SDRQAX-42JxO&_nc_ht=scontent.flim16-2.fna&oh=00_AT_inI4djHHj1ZEPeHRXNljZ5NY2rBOgmIxpz_nLKLQ4LA&oe=6234D381" width={125}></img>
            </li>
            <li>Jean Pierre Soto Tipacti <br/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlZZjrTfJH9VfA2zA6tpz3gAIV8tE3NOyhQ&usqp=CAU' width={150}></img>
            </li>
        </ul>
    </div>
    <div className="col-md-4 mt-4">
        <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" onClick={() => {
            location.href = "/"
        }} type="button">Regresar</button>
        </div>
    </div>
</div>

    )
}
export default Nosotros