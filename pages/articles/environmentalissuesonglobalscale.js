import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/ArticleTemplate.module.css"

export default function Environmental() {
    return (
        <div className={styles.noglobalstyles}>
        <div className={styles.container}>    
            <div className={styles.textcontainer}>
                <br />
                <Link href="/articles" passHref>
                    <button className={styles.return}> Return to Articles</button>
                </Link>
                <h1 className={styles.title}>Environment Issues on a Global Scale: Now is the Time to Act</h1>
 
                <section>
                    <h2 className={styles.sectionhead}>The Current State of Affairs</h2>
                    <p className={styles.maintext}>Since 1960, pollution has overtaken our atmospheres, and been pumped out by engines, power plants and other sources which have drastically altered the climate. Most of this pollution is manifested in the form of carbon dioxide (CO2), which contributes to 50% of global warming. Other greenhouse gasses emitted include methane (CH4) and nitrous oxide (N2O). These greenhouse gasses absorb outward long-wave radiation from the Earth, but exhibit no form of resistance toward inward short-wave radiation coming from the sun. They instead trap infrared radiation, or heat, from the sun, causing increases in temperature on Earth&apos;s surface and the lower atmosphere. Our Earth has already warmed a net total of 1.7°C since 1970, pushing what we once thought to be the end of the weather spectrum to more extreme levels. Places in Europe are now consistently experiencing flooding, winds with speeds equivalent to those during hurricanes, and temperatures above 37.7°C (100°F). Moreover, the mean global temperature for the past seven years has been the warmest in recorded history, intensifying unprecedented extreme weather which decimates economies, communities, and societies.</p>
                    <br />
                    <p className={styles.maintext}>Aside from the issues of global warming, there are other major environmental problems as well. If we continue the current trends of releasing chlorofluorocarbons (CFCs), chemicals found in aerosol sprays and refrigerants, into the atmosphere, the United States Environmental Protection Agency (EPA) forecasts that, by 2075, stratospheric ozone will decrease by 40%. A decline in our ozone layer would be catastrophic, as, when it is healthy, it absorbs 99% of the UV rays from the sun and thus provides a radiation umbrella for humanity. Problematically, this would lead to 150 million more skin cancer patients, 18 million more cataract patients, a 7.5% decrease in total crop harvests, a loss of 25% of aquatic products, and an overall decrease in the function of everyone&apos;s immune systems.</p>
                    <br />
                    <p className={styles.maintext}>Additionally, due to human activities such as deforestation, biodiversity has been decreasing. The current species extinction rate is 1,000 times that of the natural rate, with 12% of birds, 23% of mammals, and 25% of conifers facing a risk of becoming extinct. Overall, the United Nations Environment Programme (UNEP) predicts that by 2050, half of all animals and plants will be gone. This would ultimately have detrimental effects, as biodiversity exists to provide the ecological foundation for all life on earth, including humanity. It allows the proper functioning of ecosystems, which supply oxygen, water, and other life-sustaining services to mankind. </p>
                    <br />
                    <p className={styles.maintext}>Finally, due to both intentional and accidental discharge of household and industrial wastewater, along with polluted surface runoff of agricultural products such as fertilizers and pesticides, water pollution is exacerbating. Not only does this harm diversity of oceanic life, but it also creates issues for human health. By 2050, around 13 to 20 % of the estimated global population will lack access to clean drinking water. This makes an already tragic situation even more catastrophic, as a scarcity of safe drinking water has already resulted in five million annual deaths, with the World Health Organization (WHO) recording that 80% of human diseases can be traced back to water pollution.</p>
                </section>
                <section>
                    <h2 className={styles.sectionhead}>The Path Forward</h2>
                    <p className={styles.maintext}>The environmental problems listed above are simply a few of the countless issues that persist globally. So, what are countries currently doing to mitigate and reverse current trends? First, a prerequisite to taking action is a popular understanding of environmental issues. All countries must realize that protecting the environment is a responsibility of the entire human race. Before courses of action are decided, all countries must commit. This requires the full participation of vast developing countries, including the U.S., as well as underdeveloped countries in order to actively carry out global collaboration. In the past decades, there have been many different climate change conferences held across the world, in an attempt to achieve a common understanding that the survival of society depends on sustainable development across the world. This goal can only be reached if governments recognize the issues that persist, replace their narrow visions on national interests, and work towards international cooperation. </p>
                    <br />
                    <p className={styles.maintext}>On October 31, 2021, world leaders met in Glasgow, Scotland, for the United Nations Climate Change Conference  (COP26) in an effort to defuse the climate emergency by limiting warming to less than 1.5°C. If countries do not make significant cuts in carbon emissions this decade, it will cause future cuts to become tougher to achieve. Josep Canadell, chief research scientist at the Commonwealth Scientific and Industrial Research Organization (CSIRO) puts it simply: “Every single year that passes imposes a huge penalty for the future reductions that would be required.” </p>
                    <br />
                    <p className={styles.maintext}>A common misconception is that 1.5°C warming is unpreventable, but this is not the case. The truth is that as soon as emissions of CO2, CH4, and N2O stop rising, the atmospheric concentration of these gasses will fall as oceans and vegetation absorb them. But a threshold of emission, known as the carbon budget, exists. It is a set quantity of CO2 emissions that countries can not surpass in order to prevent 1.5°C warming. In 2021, the world released 42 billion tons of CO2, a trend that must be halted now. Specifically, a report from the Intergovernmental Panel on Climate Change (IPCC) found that the world achieving net-zero CO2 emissions by 2050 would require countries to cut emissions in half by the end of this decade. Furthermore, if we continue to emit such a large amount of CO2 annually, the world will reach 2°C warming by 2052. </p>
                    <br />
                    <p className={styles.maintext}>On a national scale, whether by implementing more carbon taxes or transitioning to renewable energy sources such as wind, nuclear, and solar energy, countries must act immediately. A national carbon tax has been established in 27 countries around the world as of 2022, and this number needs to increase to incentivize responsible behavior. But on a more individual scale, regular people can help work towards reducing their own carbon footprint as well. By eating mostly organic and local foods, and using more public transportation, we can all help change the world for the better. One person might not affect emission rates by themselves, and the same goes for one hundred people. But several million, or billions of people together, will most certainly help to overturn our current path to disaster.</p>
                </section>
                <section>
                    <h2 className={styles.sectionhead}>In Short</h2>
                    <p className={styles.maintext}>The environment is the fundamental foundation and backbone that allows for and supports the existence of life as we know it. Currently, environmental protection is a task that is widely acknowledged, but is not one that every country is actively partaking in. As a result, it is imperative that every country on this planet performs its respective duties surrounding environmental governance. With joint efforts to sustain each country’s independent economic development while placing a substantial focus on environmental protection at the same time, we can achieve sustainable development, and, more importantly, allow Earth to become the home for the harmonious coexistence of humankind and the environment. </p>
                    <br />
                    <p className={styles.maintext}>The time to act is now.</p>
                    
                </section>
                <section>
                <h2 className={styles.sectionhead}>Sources</h2> 
                <Link href="https://www.buzzfeednews.com/article/zahrahirji/global-warming-3-degrees-celsius-impact" passHref>
                    <p className={styles.linktext}>https://www.buzzfeednews.com/article/zahrahirji/global-warming-3-degrees-celsius-impact</p>
                </Link>
                <Link href="https://www.economist.com/films/2021/10/30/this-is-what-3degc-of-global-warming-looks-like" passHref>
                    <p className={styles.linktext}>https://www.economist.com/films/2021/10/30/this-is-what-3degc-of-global-warming-looks-like</p>
                </Link>
                <Link href="https://earth.org/the-biggest-environmental-problems-of-our-lifetime/" passHref>
                    <p className={styles.linktext}>https://earth.org/the-biggest-environmental-problems-of-our-lifetime/</p>
                </Link>
                <Link href="https://www.scientificamerican.com/article/theres-still-time-to-fix-climate-about-11-years/" passHref>
                    <p className={styles.linktext}>https://www.scientificamerican.com/article/theres-still-time-to-fix-climate-about-11-years/</p>
                </Link>
                <Link href="https://link.springer.com/chapter/10.1007/978-3-642-54678-5_1" passHref>
                    <p className={styles.linktext}>https://link.springer.com/chapter/10.1007/978-3-642-54678-5_1</p>
                </Link>
                </section>
            </div>
            <br /><br /><br />
        </div>
    </div>
    )
}