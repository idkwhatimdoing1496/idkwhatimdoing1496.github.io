import Banner from "./Sections/Banner/Banner";
import Seasons from "./Sections/Seasons/Seasons";
import Rules from './Sections/Rules/Rules';
import Sponsors from "./Sections/Sponsors/Sponsors";
import FormInvite from "./Sections/FormInvite/FormInvite";

const MainPage = () => {
    return (
        <main>
            <Banner/>
            <Sponsors/>
            <Seasons/>
            <Rules/>
            <FormInvite/>
        </main>
    );
};

export default MainPage;