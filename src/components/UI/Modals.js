import React from 'react'
import { Modal, Box, Typography, Button } from '@mui/material';

const Modals = (props) => {
    return (
        <Modal open={Boolean(props.error)}
            onClose={() => props.setError(null)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
            }}>
                <Typography variant="h5" component="h2" sx={{ color: "text.primary", mb: 2 }}>
                    Error
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>{props.error}</Typography>
                <Button onClick={() => props.setError(null)} sx={{ color: "text.primary" }}>Close</Button>
            </Box>
        </Modal>

    );

}

export default Modals;
