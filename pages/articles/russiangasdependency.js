import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/ArticleTemplate.module.css"

export default function RussianGas() {
    return (
        <div className={styles.noglobalstyles}>
             <div className={styles.container}>
                 
                 
            <div className={styles.textcontainer}>
                <br />
                <Link href="/articles" passHref>
                 <button className={styles.return}> Return to Articles</button>
                 </Link>
                <h1 className={styles.title}>Our Flawed Dependency on Russian Gas shows that Our Future Lies with Renewable Energy.</h1>
                <p className={styles.maintext}>High gas prices are a new reality of life for Americans, but this is nothing new. Every time that there has been a major conflict involving a gas-producing nation, prices have soared. This has been so consistent that the United States has taken measures to shield itself from impacts on the global oil markets by producing a gargantuan amount of oil in the country, over 11 million barrels per day, making it the global leader in oil production, but this has still not been enough to shield Americans from sticker shock at the gas station since America imports about 8 and a half million barrels of oil each day. The United States is now in a pivotal moment in its energy history, where large decisions can be made to affect how we consume and produce gas in the future. There are many options, and it is critical that the right path be taken. </p>
                <section>
                        <h2 className={styles.sectionhead}>What are our options?</h2>
                        <p className={styles.maintext}>The US has many options of what to do surrounding the Russian gas crisis, here are the main ones. The first option is for the US to start producing more oil, an option that has been suggested by major oil lobbies in the US like the American Petroleum Institute. The main arguments for this approach are that more production would lower prices for Americans, help supply Ukraine with enough gas to fight Russia, and help the American economy. These arguments are reasonable, as much as they do hurt the environment, more drilling does help Americans in the short term, but the main issue with this plan is that the API is asking the United States government for more permits on federal land for drilling, and more permits for offshore drilling even though major oil companies have stockpiled enough permits to keep drilling at their current pace for many years since there are over 20 million acres of public land that are held for oil extraction which is currently idle, this is an area that is larger than Delaware and Maryland put together. </p>
                        <Image src="/dataonrussiangas.png" width={670} height={400} className={styles.articlephoto} alt="statistics surrounding the amount of land that is left idle from public land in the US, there is quite a lot of it. Clean Westchester, Aaron Anidjar"/>
                        <p>Statistics from Center for Western Priorities</p>
                        <p className={styles.maintext}>Underneath these graphs, there is a larger issue, the outdated system for giving permits to oil and gas companies, a system that was changed in 1987 but still skews in the favor of the oil and gas companies. Companies nominate land, and then the bids start at $2 an acre of land, but if leases fail to sell at auction they are sold for $1.50 per acre, the price at which 1.5 million acres of currently leased public land were leased. Companies can then keep acres of land unused for 10 years or more by paying only $1.50 per year to hold onto land. The issue with the current system is that it favors gas companies by offering a low rate, and continues our dependence on non-renewable, polluting resources since the energy costs are very low. Now, I am not claiming that we should stop drilling for gas immediately and all go renewable, that is just impossible at the moment, but a renewable push, as we are seeing in Germany who have aimed for 100% renewable energy by 2035, is what we should be looking towards. Currently, about 12% of US energy consumption is from renewable sources and 20% of production is from renewable sources, and while this is good progress, and there are signs across the world that countries are taking large action to prevent climate change, there is still more that we should do, and right now is the time to do it. Right now we are seeing the issues with having an energy reliance on unreliable nations, a reliance that we can change if we transition into renewable energies. A transition to renewable energies is good for the planet and good for our stability, and now is the time for us to begin that transition. So what I ask of you is to get in contact with your local politicians, senators, governors, and other people in power to promote a faster transition to clean, renewable energy.</p>
                    </section>
                <section>
                    <h2 className={styles.sectionhead}>A Great Video on this Topic</h2>
                    <p className={styles.maintext}>Climate Town, an educational YouTuber who focuses on Climate Change and other Climate related issues, has a great video about this very topic.</p>
                    <iframe width={670} height={380} src="https://www.youtube.com/embed/kJOuyckvDGY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
                </section>
                <section>
                    <h2 className={styles.sectionhead}>Sources</h2>
                    <Link href="https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production?pd=5&p=0000000000000000000000000000000000vg&u=0&f=A&v=mapbubble&a=-&i=none&vo=value&&t=C&g=00000000000000000000000000000000000000000000000001&l=249-ruvvvvvfvtvnvv1vrvvvvfvvvvvvfvvvou20evvvvvvvvvvnvvvs0008&s=94694400000&e=1609459200000" passHref>
                        <p className={styles.linktext}>EIA Data</p>
                    </Link>
                    <Link href="https://www.blm.gov/programs/energy-and-minerals/oil-and-gas/about" passhref>
                        <p className={styles.linktext}>BLM Data</p>
                    </Link>
                    <Link href="https://storymaps.arcgis.com/stories/63745d4475104a33968081ff008e36b9" passHref>
                        <p className={styles.linktext}>Story Maps ARCGIS Data</p>
                    </Link>
                </section>
            </div>
            <br /><br /><br />
        </div>
        </div>
       
    )
}