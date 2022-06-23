import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard(props) {

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">{props.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">{props.description}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Link href={props.githubLink}>
                    <GitHubIcon />
                </Link>
            </CardActions>
        </Card>
    )
}