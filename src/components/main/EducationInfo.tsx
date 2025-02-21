import Box from "@mui/material/Box";
import styles from "../../css/main.module.css";
interface EducationInfoProps {
    name: string;
    year: number;
    status: string;
}

export default function EducationInfo(props: EducationInfoProps) {
    return (
        <>
            <Box className={styles.block_edu}>
                <h4>Org name: <p> {props.name} </p></h4>
                <h4>Year: <p>{props.year} </p></h4>
                <h4>Status: <p>{props.status}</p> </h4>
            </Box>
        </>
    )
}