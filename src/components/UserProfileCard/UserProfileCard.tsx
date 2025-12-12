import React from "react";
import type { UserProfileCardProps } from "../../types";

import { Grid, Typography, Button } from "@mui/material";

const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail = true,
    showRole = true,
    onEdit,
    children,
}) => {
    return (
        <>
            <Grid container justifyContent={"center"}>
                <Grid size={{ xs: 12, md: 5 }} padding={2} borderRadius={2} boxShadow={3} bgcolor={"lightgray"}>
                    <Grid spacing={2} container display={"flex"} flexDirection={{ xs: "column", md: "row" }} justifyContent={"center"} alignItems={"center"}>
                        <Grid size={{ xs: 12, md: 6 }} display={"flex"} flexDirection={{ xs: "column", md: "row" }} justifyContent={{ xs: "center", md: "flex-start" }} alignItems={{ xs: "center", md: "flex-start" }}>
                            <img src={user.avatarUrl} alt={`${user.name}'s avatar`} width={'120px'} height={'120px'} style={{ borderRadius: '50%' }} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} flexDirection={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Typography variant="h5" component={'h5'}>{user.name}</Typography>
                            <Typography variant="subtitle1" component={'sub'}>{showEmail && user.email}</Typography>
                            <Typography variant="subtitle1" component={'sub'}>{showRole && user.role}</Typography>
                        </Grid>
                        <Grid size={12}>
                            {children}
                            <Button variant="contained" fullWidth={true} onClick={() => onEdit?.(user.id)} color="primary">
                                Edit Profile
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default UserProfileCard;