import FotoSection2 from "./../Section2/Foto_Section2";
import TextSection2 from "./../Section2/Text_Section2";

const Section3 = () => {
    return (
        <section className="section234">
            <TextSection2 textH2="Job seekers"
                text1="The most important thing for being successful in your career is doing your work with love and pleasure. You can find your dream work just using our social network platform. We’ve simplified the really hard process of finding a new work. Here in our portal you can be aware regarding new vacancies and apply to them quickly having all your professional background information posted on your profile. Just fill your profile with needed information and follow the companies you like the most to join their team and make your effort in their progress. The potential employer can contact you with offers as well if you make your profile informative and interesting."
                text2="Join our professional portal and make your growth easier and less stressful!" />
            <FotoSection2 src="./../../img/job_seekers.png" alt="job_seekers" />
        </section>
    )
}


export default Section3