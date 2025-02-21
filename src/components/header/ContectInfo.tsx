import Box from "@mui/material/Box";
import styles from "../../css/header.module.css";

interface InfoProps {
    phone: string,
    email: string,
    city: string
}


export default function ContactInfo(props: InfoProps) {
    return (
        <>
            <Box className={styles.contectInfo}>
                <h4>{props.phone}</h4>
                <h4>{props.email}</h4>
                <h4>{props.city}</h4>
            </Box>
        </>
    )
}