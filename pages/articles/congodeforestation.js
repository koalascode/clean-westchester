import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/ArticleTemplate.module.css"

export default function CongoDeforestation() {
    return (
        <div className={styles.noglobalstyles}>
            <title>Congo Deforestation</title>
            <div className={styles.container}>    
                <div className={styles.textcontainer}>
                    <br />
                    <Link href="/articles" passHref>
                        <button className={styles.return}> Return to Articles</button>
                    </Link>
                    <h1 className={styles.title}>Deforestation in the Congo Is Still a Pressing Environmental Issue; How Is the World Responding?</h1>
                    <section>
                    <p className={styles.maintext}>In this turbulent period of history, global crisis after global crisis have taken the spotlight and dominated our news cycle. With the pandemic and ongoing Russian invasion of Ukraine, it is certainly difficult to focus on an issue that threatens our very existence: climate change and deforestation. <br /><br />Since the 1990s, over 1.03 billion acres of land have been deforested for a variety of purposes. While many assume that logging is the principal cause of this, over 90% of deforestation is actually the result of ranchers, farmers, and planters clearing vast tracts of land in order to create areas for grazing and crop-growing. This issue is especially devastating in some of the largest swaths of wilderness and biodiversity on the planet. Specifically, this has ravaged ecosystems in the Congo Basin. But how are the Congolese government and environmental organizations working to prevent this?</p>
                    </section>
                    
                    <section>
                        <h2 className={styles.sectionhead}>Deforestation in the Congo</h2>
                        <p className={styles.maintext}>Home to the second largest river in the world by volume and the second largest rainforest in the world, the Congo Basin is teeming with ecological variety. The Basin stretches across nearly 440 million acres of land in nine countries, and fosters species such as the Lowland Gorilla, the Okapi, the Bonobo, the African Bush Elephant, and many others. Over a thousand species of birds live in the Basin, along with 1400 species of fish and hundreds of species of other animals. But one of the key components of the vast ecosystem is under attack. The Congo Rainforest, known for its high-stretching trees, is a major victim of deforestation.</p>
                        <Image src="/congorainforest.png" width={670} height={450} className={styles.articlephoto} alt="rainforest in the Congo, article written by Kevin Daniel, Clean Westchester"/>
                        <p className={styles.photobiobiggap}>The Congo Rainforest</p>
                        <p className={styles.maintext}>The Democratic Republic of Congo (DRC) has seen a depressing amount of violent conflict in the past three decades,  forcing many people to rely on natural resources in order to support themselves. This has had a devastating impact on the rainforest and its wildlife. The clearing of land for agricultural purposes is also a major cause of the deforestation that the Congo has seen over the years. Specifically, the industries for palm oil, sugar, and rubber are some of the chief perpetrators of the land clearing in the Congolese Rainforest. Industrial logging is a major problem as well, and the consequences of clearcutting have been extensive. The construction of roads after logging has led to an increase in poaching, and the African Bush Elephant has been hit particularly hard. Mining and the growth of cities have played a role in the Congo&apos;s deforestation too.</p>
                    </section>
                    <section>
                        <h2 className={styles.sectionhead}>Impacts of Deforestation</h2>
                        <p className={styles.maintext}>The impacts of deforestation in the Congo are wide-reaching, and affect not only Central Africa, but the rest of the world as well. For instance, one popular method of clearing land in the Congo is the use of fires, and Greenpeace, an international organization that focuses on major environmental issues, estimates that the process of clearing forested land will release up to 34.4 billion tons of carbon dioxide between now and 2050. Unfortunately, this is not the only way that deforestation in the Congo has accelerated climate change, as the massive reserves of carbon that rainforests hold are decreased each time a tree is cut down. Trees take in carbon dioxide during their respiratory process, and are a key player in the mitigation of climate change, so when significant portions of forests are cleared, the amount of carbon dioxide in the atmosphere becomes less regulated.</p>
                        <Image src="/congoimagecover.jpg" width={750} height={470}/>
                        <p className={styles.photobio}>The Effects of Erosion in Kinhasa, the DRC's Capital City</p>
                        <p><center>Photo by Matthias Vanmaercke</center></p>
                        <p className={styles.maintext}>Of course, deforestation results in local climate issues as well, and one of the heaviest-hitting ramifications is the significant alterations in the amount of rainfall that certain areas of Central Africa receive. This entails far higher levels of rainfall during the wet season and an increase in the harshness of the dry season, which can cause severe weather events and disrupt natural cycles. The southern portion of the Congo Basin has also seen a significant amount of soil erosion as a result of deforestation and a subsequent lack of tree cover, putting the environment at risk of landslides and the buildup of sediment in sources of water.</p>
                    </section>
                    <section>
                    <h2 className={styles.sectionhead}>Responses and Solutions</h2>
                    <p className={styles.maintext}>In response to the crisis of deforestation, the government of the DRC has implemented various laws and projects in an attempt to slow the destruction of the Congolese Rainforest. However, another major issue within the DRC is corruption and bribery, so these efforts have seen little success, and those responsible for deforestation have been able to continue their practices relatively unhindered. Several international organizations have taken notice of the failed attempts of DRC&apos;s government, and this has resulted in monetary contributions from the World Bank, and attention from the Mercy Corps and the World Wildlife Fund (WWF). The latter two organizations have been working to establish a means by which people can harvest fuelwood without having an adverse impact on the environment. Plantations specifically for fuelwood have been established and WWF has been researching potential alternatives for fuelwood. <br/><br/>Foreign governments are also aiding the effort to diminish deforestation in the DRC, as the European Union, in collaboration with the Congolese Minister for the Environment, have put together the Forest Law Enforcement, Governance and Trade (FLEGT) Plan, which has the intended goal of “[reducing] illegal logging by strengthening sustainable and legal forest management, improving governance and promoting trade in legally produced timber” (European Forest Institute 2022). </p>
                    </section>
                    <section>
                    <h2 className={styles.sectionhead}>Looking Forward</h2>
                    <p className={styles.maintext}>While the many attempts to maintain the health of the forested ecosystems of the Congo Basin have seen limited success, there have been some major achievements, one of which was the removal of Salonga National Park from the UNESCO list of threatened sites. UNESCO commended the Congolese government&apos;s efforts in preventing oil drilling and poaching in the park, as well as the advancements in park management. <br /><br />Another source of hope for the Congo Rainforest comes from the plans of the Congolese government to grant areas of land to local villages and communities so that they can be managed carefully and sustainably. Data collected has shown the effectiveness of this practice, as Rainforest Foundation UK has observed a 23% decrease in the rate of deforestation amongst the lands given as a part of this program. While there are still some issues and speed bumps that have come to light during the implementation of the initiative, it has seen far more success than attempts in neighboring countries and prior attempts of the Congolese government. If this initiative continues to see success and improvement, it has the potential to contribute to the preservation of one of the important ecosystems on the planet.</p>
                    </section>
                    <sources>
                    <h2 className={styles.sectionhead}>Sources</h2> 
                    <p className={styles.sources}>Butler, Rhett A. &quot;The Congo Rainforest.&quot; Mongabay, 1 Aug. 2020, rainforests.mongabay.com/congo/. Accessed 12 Mar. 2022. <br /><br />
                        Congo Basin.&quot; World Wildlife Fund, www.worldwildlife.org/places/congo-basin. Accessed 12 Mar. 2022. <br /><br />
                        &quot;Daniel Beltrá&apos;s Photographs of Deforestation in the Democratic Republic of Congo.&quot; The Guardian, 29 Sept. 2022, <br /><br /> www.theguardian.com/environment/gallery/2009/sep/29/daniel-beltra-princes-rainforest-project. Accessed 12 Mar. 2022. <br /><br />
                        &quot;Deforestation Facts and Statistics 2022 [Global Data].&quot; Toner Buzz, 8 Mar. 2022, www.tonerbuzz.com/blog/deforestation-facts-and-statistics/. Accessed 12 Mar. 2022. <br /><br />
                        &quot;The Democratic Republic of the Congo: Rainforests and Climate Change.&quot; Friends of the Congo, friendsofthecongo.org/images/pdf/CongoRainforest_latest.pdf. Accessed 12 Mar. 2022. <br /><br />
                        &quot;Fight against Illegal Timber Exports: The EU and the Democratic Republic of the Congo Launch Negotiations.&quot; European Commission, 19 Nov. 2014, ec.europa.eu/archives/commission_2010-2014/piebalgs/headlines/news/2010/10/20101021_en.htm. Accessed 12 Mar. 2022. <br /><br />
                        N&apos;Dona, Alain, editor. &quot;Road Stabilization and Erosion Control Using the Vetiver System in the Democratic Republic of the Congo.&quot; Vetiver, web.archive.org/web/20150404013007/http://vetiver.com/ETH_WORKSHOP_09/ETH_S3a.pdf. Accessed 12 Mar. 2022. <br /><br />
                        Séverin, Arsène. &quot;Deforestation Threatens South with Famine.&quot; IPS, 22 June 2010, web.archive.org/web/20110101114029/http://ipsnews.net/news.asp?idnews=51918. Accessed 12 Mar. 2022. <br /><br />
                        &quot;UNESCO Removes Salonga National Park from World Heritage &apos;Danger&apos; List.&quot; VOI, 8 Aug. 2021, voi.id/en/news/73533/unesco-hapus-taman-nasional-salonga-dari-daftar-bahaya-warisan-dunia. Accessed 12 Mar. 2022. <br /><br />
                        &quot;What Is FLEGT?&quot; EU FLEGT Facility, www.euflegt.efi.int/what-is-flegt. Accessed 12 Mar. 2022. <br /><br />
                        Yeung, Peter. &quot;The Congo Basin Contains the World&apos;s Second-Largest Rainforest, Crucial for Regulation the World&apos;s Climate. Inside It, a Plan to Halt the Forest&apos;s Decline Is Bearing Fruit.&quot; BBC, 7 Jan. 2021, www.bbc.com/future/article/20210107-congo-basin-a-bold-plan-to-save-africas-largest-rainforest. Accessed 12 Mar. 2022.</p>
                    </sources>
                </div>
                <br /><br /><br />
            </div>
        </div>
    )
}