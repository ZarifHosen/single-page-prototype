import React from 'react'
import { Modal, Box, Typography, Button } from '@mui/material';

const Modals = (props) => {
    return (
        <Modal open={Boolean(props.error)}
            onClose={() => props.setError(null)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{ bgcolor: "background.paper", p: 2 }}>
                <Typography variant="h5" component="h2">
                    Error
                </Typography>
                <Typography variant="body1">{props.error}</Typography>
                <Button onClick={() => props.setError(null)}>Close</Button>
            </Box>
        </Modal>

    );

}

export default Modals;