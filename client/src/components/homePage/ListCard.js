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
                <Button color="primary" value={props._id} onClick={props.openList}>Open</Button>
            </CardActions>
            </CardContent>
        </Card>
    </Grid>
)

export default ListCard;