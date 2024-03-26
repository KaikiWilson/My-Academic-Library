import './Main.css'


const Main = () => {
    return(
        <main>
            


            <div className='card-background'></div>

            <div className='down-card-background'></div>
            <div className='down2-card-background'></div>



            <div className='box-logo'>
                <div className='mal-logo'>
                    <h1 className='text-logo'>MAL</h1>
                </div>

                <span className='title-logo'>My academic Library</span>

            </div>
        
                <div className='box-input-login'>
                    <input className='input-login' type='text' placeholder='Login'></input>
                </div>
                
                <div className='box-input-password'>
                    <input className='input-password' type='password' placeholder='Senha'></input>
                </div>

        </main>
    )
}


export default Main;