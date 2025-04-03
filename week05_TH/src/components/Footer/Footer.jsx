import FooterContent from "../FooterContent/FooterContent";
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <FooterContent contents={['About', 'Student name: Huynh Thanh Giang', "Student ID: 22716371"]}></FooterContent>
            <FooterContent contents={['Midterm Exam', 'Application interface development', "Date: 26/03/2025"]}></FooterContent>
            <FooterContent contents={['Class', 'Class name: DHKTOM18B', "Class ID: 420301541302"]}></FooterContent>
            <FooterContent contents={['Contact', 'Email: htg1882004@gmail.com', "Phone: 0949770422"]}></FooterContent>
        </div>
    )
}