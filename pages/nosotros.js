import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from "../components/footer.component";
import MenuNavegacion from "../components/menuNavegacion.component";

function Nosotros() {
    return ( <div className='row'>
            <MenuNavegacion/>
            <h2>Nosotros</h2>
            <div className='col-md-8 mt-4'>
                <ul>
                    <li>Mauricio Alejandro Aguirre Izaguirre <br/>  
                        <img src='https://lh3.googleusercontent.com/rXSbudIJbRaVac-sdgmqs5_xp2DLhxVcC-LJz6a3QAaMElGaVnvzVcwkWe8NzW-QrvFsXfq_Q7G6xTkb1eItkIUIIHC5I-Cp2vY2L9Q1rdx4Taoz_F-_dNMBGW7UvJ8Fw4dSQm7rgz5VQ1EAw-ZUwZ7iFkfuzBMDnUBrHpy4lJGo7U37PKE8BJmPxT2saYGk-xVtico5JQVAP5-Xqb31V3EHDNl3TF5KHJmohlEgLeHT9hVVuYoAQMPKV9xrOltLpVYxjfan2Eb0Ugss10qrmt2_fNN5__BbVjChPMuOEe2VQfuN47oau-vixZlLcNC6y0Lz-zsyftTZjbuq60BKL-q2Id5Aq91u6hPa11MCK2vCxvSaN1jSD28HoJX0IoJIJWFbtTQJL9wFWZ97j3oWLEHqVz9Gz5j46pKLG5CGTNfzDuID2uorvSx8BGNqFCQSsmqYIS_55e2HzLIpIHCgBstGesBCSrD66UwbC28tActHBpwUxobtqGIB_B61FVt-TcJ18P-vT6pzi5734CV2B8bz9yTLYRFlpwjeToC4AaRrPgVdmwFQ-A1CttsBihoFT3upcZo5VCCSahHbyQXvABQBeZdmB00Se1caa_gRcmH8ZAbNL6urdofptOR8aoYloi_uMsqS6ffuBGTxKQ05m73K32JOLR8yZfi9yJLQio3R4izrlN6dwfOiLV4Bi6RjIq3Q2047peKXSkN3GsFVUIQ=s720-no?authuser=0' width={150}></img>
                    </li>
                    <li>Sergio David Flores Tavara</li>
                    <li>Marco Antonio Landauro Alba <br/>
                        <img src='https://lh3.googleusercontent.com/HxJpWu3q5jCmH0_y5rmZBtJlopJCPC-6XOWZLDKELUqP5ehbx5NIoe2z_A7ygDj6mKqGnmg9J8LJR3M-qmnC_FcnkDuqtLf2Brx02Xu_sPHBmX59t1b9ivAM5zQ6gcfHRwXuaL9U7I8RAtXbD-nZCpBViQA0sACzs0t_78bEY_iUcIZyHz1t7u6L1t1XMYyO6t9rDEeFL-jKONfRkbF_TPXbYUNZLHt3WCmnKgDco_Z-LkYUVraTia9yEM1UG9K6SIkZs7xVvdJc8SGSgNcaLA1AjqxR7EKDzN99c-6YsknsMu4y-98wvEpF5Y7TqtWSybXuRZJsFZ-rWplcgJz0KqfxoVeSKtA6vaQd185Vq4Qzdp12URk5N2hxSEf1ApnNvg_v-uity9NBrQvTVwFLq2I8MtnbUASP6MYyryA3SmR5DdUdAlM3QH-TtxCq2xDZO3n9aienKyCZNDm9aKstKDLudUdpFqZPGtSkTMatFghQ-BRJIkBv6JQ9YkAaSNqTvhFuOAV617oxH6PVKJgIfbbYA5bE2l6Nb3k4yHRjvGavh34CWNIcBGeyL7adS8EugWR34XdnTnhOjExMxuUODady2UTCsQ8Qik7XqtEeRG0wFfurNlh-h-B1RbvjFXoS__we7thd_zRukkf73HfjstyVLMGoi1rld_y_eFLtXVFrarjf5RAMBO7VurzoV4V_MXuxLL-YMpS5YT0jPUku0qClS3Tqa-ZwXo3KlcBVmUylRfr4JNqNN-8uRpitM8rhXnvKdBgYWXgSK_oxOw=w533-h662-no?authuser=0' width={125}></img>
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
            <Footer/>

    </div>

    )
}

export default Nosotros