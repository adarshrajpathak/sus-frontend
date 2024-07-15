import logoSus from '../../res/longlogoUS.png';
import suspenseStyle from './suspense.module.css';

export function SuspenseHome(){
    return (
        <>
            <img src={logoSus} className={suspenseStyle.Applogo} alt="long-logo" />
            <br></br>
            <div className={suspenseStyle.loader}>
                <span className={suspenseStyle.bar}></span>
                <span className={suspenseStyle.bar}></span>
                <span className={suspenseStyle.bar}></span>
            </div>
        </>
    )
}