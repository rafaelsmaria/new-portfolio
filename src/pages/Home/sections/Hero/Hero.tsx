import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButtons";
import { downloadPDF } from "../../../../scripts/downloadPdf";
import { sendEmail } from "../../../../scripts/sendEmail";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px"
        }
    }))

    const StyledImage = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} justifyContent={"center"}>
                            <Box position="relative" textAlign="center">
                                <StyledImage src={Avatar} />

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">
                                Rafael Maria
                            </Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">
                                I'm a Software Engineer
                            </Typography>

                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} marginTop={"10px"}>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={() => {
                                        downloadPDF('../../../../assets/docs/CV-RafaelMaria-BR.pdf', 'CV-RafaelMaria-BR.pdf')
                                    }}>
                                        <FileDownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={() => {
                                        sendEmail()
                                    }}>
                                        <EmailIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
