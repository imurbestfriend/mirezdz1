import { useState } from "react";
import Box from "@mui/material/Box";
import './css/App.css';
import styleMain from './css/main.module.css';
import PersonalInfo from "./components/header/PersonalInfo.tsx";
import ProfileAvatar from "./components/header/Avater.tsx";
import ContactInfo from "./components/header/ContectInfo.tsx";
import EducationInfo from "./components/main/EducationInfo.tsx";
import Skills from "./components/main/Skills.tsx";

import { contactData, data, arr } from "./info.ts";

const [name, surname, salary, job] = data;
const [phone, email, city] = contactData;

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Box display="flex" justifyContent="space-between" sx={{ bgcolor: "primary.main" }}>
                <Box  display="flex" sx={{ p: 2 }}>
                    <PersonalInfo name={name} surname={surname} job={job} salary={salary} />
                </Box>
                <Box>
                    <ProfileAvatar />
                </Box>
                <Box>
                    <ContactInfo phone={phone} email={email} city={city} />
                </Box>
            </Box>

            <Box className={styleMain.main}>
                <h3 className={styleMain.title}>Education</h3>
                <EducationInfo name={'RTU MIREA'} year={2026} status={'student'} />
                <EducationInfo name={'school 21'} year={2025} status={'student'} />
                <h3 className={styleMain.title}>Skills</h3>
                <button onClick={handleClick}>
                    {isOpen ? 'Show less' : 'Show full'}
                </button>
                <Skills name={arr} isOpen={isOpen} handleClick={handleClick} />

            </Box>
        </>
    );
}

export default App;
