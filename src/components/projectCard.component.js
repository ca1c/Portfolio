import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ProjectCard(props) {

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5">{props.name}</Typography>
            </CardContent>
        </Card>
    )
}