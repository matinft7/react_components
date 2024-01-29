// Navigation bar with brand name
export default function NavBar({ appname , data , classnames}){
    var key = 0;
    const listData = data?.map(d => <li key={ key=key+1 }><a href={ d.href }>{ d.name }</a></li>);
    const classnameList = classnames.toString().replace(","," ");
    return(
        <nav className={ classnameList }>
            <h3>{ appname }</h3>
            <ul>
                { listData }
            </ul>
        </nav>
    );
}