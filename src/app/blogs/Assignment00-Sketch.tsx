import Footer from "../components/footer";
import Paragraph from "../components/paragraph";
import Title from "../components/title";

export default function Blog(){
    return(
        <>
            <Title title="Assignment00 - Initial Sketch for Final Project"/>
            <Paragraph>
                {"After much thought and consideration, I've landed on making a knitting machine for making chinsese finger traps. A chinese finger trap is a braided toy that constricts when stretched and expands when squashed. This mechanism makes it an amusing toy for getting your fingers stuck, but it also has uses for cable management, orthopedics, and to make fun artificial muscles."}
                {"The unique capability of the finger trap is caused by it's braided design, where each string is rotated in alternating directions, overlapping each other on the way."}
                {"This design seemed like an interesting challenge for a machine to reproduce, and I'd like to make some nice fingertraps for cable management."}
                
            </Paragraph>
            <Footer/>
        </>
    );
}