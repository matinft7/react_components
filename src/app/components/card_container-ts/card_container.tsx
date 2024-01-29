import styles from '@/app/ui/components/card_container/card_container.module.css';
import Card from '@/app/ui/components/card/card';

export default function CardContainer({title}:{title:string}){
    const cards = [{
        image : {src:'/christina-branco-G_xYDS6UuXo-unsplash.jpg',alt:'product',width:350,height:350},
        text : {title:'محصول 1',body:'محصول 1'}
    },{
        image : {src:'/jonathan-pielmayer-0em3k8ebFCs-unsplash.jpg',alt:'product',width:350,height:350},
        text : {title:'محصول 1',body:'محصول 1'}
    },{
        image : {src:'/mae-mu-Mqb0YDRNr7k-unsplash.jpg',alt:'product',width:350,height:350},
        text : {title:'محصول 1',body:'محصول 1'}
    },{
        image : {src:'/pmv-chamara-uWR8FcQMl5k-unsplash.jpg',alt:'product',width:350,height:350},
        text : {title:'محصول 1',body:'محصول 1'}
    }]
    console.log(cards[0].image.alt)
    return(
        <div className={styles.container + ' pd-10'}>
            <div className={styles.container_title}>{title}</div>
            <div className={styles.card_container}>
            {cards.map((card) => {
                return(
                    <Card image={card.image} text={card.text}/>
                )
            })}
            </div>
        </div>
    )
}