import React from "react";
import { Grid, Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";

const ListCard = props => (
    <Grid item>
        <Card>
            <CardContent>
                <Typography variant="h2">
                    {props.date}
                </Typography>
            <CardActions>
                <Button>Open</Button>
            </CardActions>
            </CardContent>
        </Card>
    </Grid>
)

export default ListCard;