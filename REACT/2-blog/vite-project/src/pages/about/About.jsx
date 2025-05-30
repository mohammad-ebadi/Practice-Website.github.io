import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import style from "./About.module.css"

export default function About(){
    return(
        <div className={style.about}>
            <Navbar></Navbar>
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo tempora ipsam laboriosam deserunt ad suscipit ducimus accusamus quod explicabo doloremque, quidem illum sint pariatur, eos libero? Totam corporis quisquam dolor explicabo consequuntur accusamus recusandae nemo, consectetur dignissimos molestias cupiditate eius obcaecati vel quis omnis reprehenderit iure minus dolores expedita aliquam nulla deserunt officia laudantium suscipit? Pariatur soluta, eos deserunt laborum dolore nemo sunt. Animi quo hic quaerat excepturi itaque nobis accusantium porro rem reprehenderit, cupiditate, quidem asperiores quas. Iusto corrupti voluptas modi? Quisquam adipisci dignissimos perspiciatis reiciendis deleniti quas accusamus amet ducimus nulla id neque, autem blanditiis dicta voluptate delectus cumque ipsa sint quam. Ipsa, dolores nesciunt dolorem ipsum dolore ullam magni nihil laborum aliquid animi odit reprehenderit alias debitis obcaecati dicta placeat. Ab aut vel illum? Consequuntur explicabo reiciendis ullam dolores quia non nemo suscipit nam enim voluptatem dolor quod beatae, voluptate amet dolore unde hic perferendis omnis nesciunt quae aperiam optio, at ad! Mollitia atque modi officia quaerat quibusdam a laudantium maiores vel, suscipit veritatis earum. Cupiditate quibusdam mollitia labore voluptatibus iusto facilis vitae ad aut, aliquid quasi sequi voluptatem obcaecati voluptatum corporis fugiat! Id enim earum ipsam tempora. Molestiae quia debitis incidunt iusto minus, sit quibusdam.</p>
            <div className={style.img}>
                <img src="https://picsum.photos/200"></img>
            </div>
            <Footer></Footer>
            
        </div>
    );
}