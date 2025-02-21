import Box from "@mui/material/Box";
import styles from "../../css/header.module.css";

interface Info {
    name: string;
    surname: string;
    salary?: string;
    job: string;
}

export default function PersonalInfo(props: Info) {
    return (
        <>
            <Box className={styles.text}>
                <Box display="flex" gap={1}>
                    <h3>{props.name}</h3>
                    <h3>{props.surname}</h3>
                </Box>
                {props.salary && <h4>{props.salary}</h4>}
                <h4>{props.job}</h4>
            </Box>
        </>
    );
}
