import style from './styles.module.css'

const Header = ()=>{
    return(
        <>
            <header className={style.header}>
                <section className={style.content}>
                    <nav className={style.nav}>
                        <h1>TSRNXT</h1>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header