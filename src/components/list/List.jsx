import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import style from './List.module.css';
import { VegyItem } from './VegyItem';

export function List() {
    const data = ['Bulves', 'Morkos', 'Svogunai', 'Kopustas', 'Pomidoras', 'Agurkas'];

    return (
        <>
            <Header />
            <main>
                <ul className={style.vegetables}>
                    {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
                    {data.map((vegy, index) => <VegyItem key={index} title={vegy} />)}
                </ul>
            </main>
            <Footer />
        </>
    );
}
