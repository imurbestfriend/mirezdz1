interface SkillsList {
    name: string[];
    isOpen: boolean;
    handleClick: () => void;
}

export default function Skills(props: SkillsList) {
    const limit = 3;

    return (
        <>
            <ul>
                {props.name
                    .slice(0, props.isOpen ? props.name.length : limit)
                    .map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
        </>
    );
}
